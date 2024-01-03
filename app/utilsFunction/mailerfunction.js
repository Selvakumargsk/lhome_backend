const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  service: 'gmail',
  auth: {
    user: 'nellaikumar.sk@gmail.com',
    pass: '2ndemail',
  },
});

module.exports = { transporter };