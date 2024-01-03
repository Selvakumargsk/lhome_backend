const User = require('../model/Registrationmodel');

async function registerUser(req, res) {
  try {
    const { name, number, checkforwhatsapp , email, pincode } = req.body;

    const isNumberExist = await User.findOne({where : {number}});
    const isEmailExist = await User.findOne({where : {email}});

    console.log(isNumberExist.id , isEmailExist.id);

    let user;

    if(isNumberExist && isEmailExist && (isNumberExist.id===isEmailExist.id)){
      await User.update({name , checkforwhatsapp , pincode} , {where : {number , email}});
      user = await User.findOne({where : {number , email}});
    }else if(isNumberExist && isEmailExist && (isNumberExist.id != isEmailExist.id)){
      res.status(501).json({error : 'The number or email registered already please check once again'}); 
    }else if(isNumberExist){
      await User.update({name , checkforwhatsapp , pincode , email} , {where : {number}});
      user = await User.findOne({where : {number}}); 
    }else if(isEmailExist){
      await User.update({name , checkforwhatsapp , pincode ,number} , {where : {email}});
      user = await User.findOne({where : {email}});
    }else{
     user = await User.create({
      name,
      number,
      checkforwhatsapp,
      email,
      pincode,
    });
  }
  if(user){
    res.status(201).json({ user , msg : 'user created successfully' });
  }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error });
  }
}

module.exports = { registerUser };
