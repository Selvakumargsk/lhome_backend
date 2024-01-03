const { Sequelize, DataTypes } = require('sequelize');
const otpGenerator = require('otp-generator');
const sequelize = require('../utilsFunction/dbFunctions'); 

function generateNumericOTP(length) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits.charAt(randomIndex);
  }
  return otp;
}

const Login = sequelize.define('Login', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9]{10}$/i, // Validate that it's a 10-digit number
    },
  },
  otp: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'logins',
  hooks: {
    beforeCreate: async (login) => {
      // Generate OTP before creating the record
      login.otp = generateNumericOTP(6);
    },
  },
});


module.exports = Login;
