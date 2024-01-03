const User = require('../model/Registrationmodel');
const referUser = require('../model/referModel');
const nodemailer = require('nodemailer');



const postReferUser = async (req, res) => {
    const { userId, name, number, email, city } = req.body;

    const user = await User.findOne({where : {id : userId}});
    let userName;
    if(user){
        userName = user.name;
    }else{
        userName = 'Custom User'
    }


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'gskumarnellai@gmail.com',
            pass: 'yyiwuipmkjjqmnem',
        },
    });
    const mailOptions = {
        from: 'gskumarnellai@gmail.com',
        to: email,
        subject: 'Referral Link',
        text: `Hello Mr/Mrs.${name}, your friend Mr.${userName} invited you to check this link: https://www.lhome.co.in/`,
      };
      

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error(error);
            res.send(501).json({ error: 'error occured during referral try again' })
        } else {
            console.log('Email sent: ' + info.response);
            const refereduser = await referUser.create({ userId, name, number, email, city });
            res.status(201).json({ refereduser, msg: 'referred successfully' })
        }
    })


}

module.exports = { postReferUser };
