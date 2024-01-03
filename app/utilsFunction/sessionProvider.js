const jwt = require('jsonwebtoken');
require('dotenv').config();


const secretKey = process.env.jwt_SECRET;

function generateSessionToken(user) {
  const payload = {
    userId: user.id,
  };

  const options = {
    expiresIn: '30d',
  };
  return jwt.sign(payload, secretKey, options);
}

function verifySessionToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
   return null;
  }
}

module.exports = { generateSessionToken, verifySessionToken };