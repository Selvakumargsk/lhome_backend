const Login = require('../model/userLoginmodel'); 
const User = require('../model/Registrationmodel'); 
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const { generateSessionToken } = require('../utilsFunction/sessionProvider');
const { sendOTPasSMS } = require('../utilsFunction/otpSender');

async function sendOTP(req, res) {
  const { number } = req.body;

  try {
    let login = await User.findOne({ where: { number } });
    let isexist = await Login.findOne({where : { number }});

    if (login && !isexist) {
      login = await Login.create({ id :login.id ,  number });
      // sendOTPasSMS(login.otp , login.number);
    res.status(200).json({ message: 'OTP sent successfully' });
    }else if(login && isexist){
      const deletePreviousRecord = await Login.destroy({where : { number }})
      if(deletePreviousRecord){
        login = await Login.create({ id :login.id ,  number });
        res.status(200).json({ message: 'OTP sent successfully' });
      }
    }
    if (!login) {
        res.status(400).send('user not registered')
    }

  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function resendOtp(req , res){
  const { number } = req.body;
  let login = await Login.findOne({where : { number }});

  if(login){
    res.status(201).json({ message: `OTP ${login.otp} sent again to the ${number} `})
  }else{
    res.status(400).json({message: `There is an error with the entered ${number} . Please recheck your registration details`})
  }
}

async function verifyOTPAndCreateSession(req, res) {
  const { number, otp } = req.body;

  try {
    const login = await Login.findOne({ where: { number } });

   if (login && login.otp == otp) {

        const user = await User.findOne({where: { number }})
        const sessionToken = generateSessionToken(user);
        const login = await Login.destroy({where: { number }})
        // login.otp = null;
        // await login.save();
        
        res.status(201).json({ user: user, token: sessionToken });
    } else {
      res.status(401).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { sendOTP, resendOtp , verifyOTPAndCreateSession };
