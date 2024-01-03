// require('dotenv').config();

// const sid = process.env.Account_SID;
// const token = process.env.Auth_token;
// const twillioNumber = process.env.Twilio_number;


// const twillio_client = require('twilio')(sid, token);


// function sendOTPasSMS( otp , number){

//     console.log(number , otp);
// twillio_client.messages
//   .create({
//     body: `Greetings from Lhome! Your OTP for login is:${otp}. Keep it confidential.`,
//     to: `+91${number}`, 
//     from: twillioNumber, // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid))
//   .catch(err=> console.log(err));

// }
// module.exports = { sendOTPasSMS };