const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  service: 'gmail',
  auth: {
    user: 'nellaikumar.sk@gmail.com',
    pass: 'collegeadmin',
  },
});

module.exports = { transporter };