const Wish = require('../model/wishmodel');

async function updateWishlist(req , res) {
try{
    const { index } = req.params;
    const {loginId , categoryId } = req.body;
    // console.log(index , loginId);
    if(!loginId){
        res.status(201).send('loginId required');
    }
    const isexist = await Wish.findOne({where : {index : index ,loginId : loginId , categoryId : categoryId} });
    let trendWish;
    if(isexist){
        trendWish = await Wish.destroy({where : {index : index , loginId : loginId , categoryId : categoryId} });
        res.status(200).json({wishlist : trendWish , msg: "index deleted"})
    }else{
        trendWish = await Wish.create({ index , loginId , categoryId });
        res.status(200).json({wishlist :trendWish , msg: "index added"})
    }


}catch(err){
    console.log(err , "error occured");
    res.status(500).json({ err });
}   
}

async function getAllWishes(req , res) {
    const {loginId , categoryId } = req.body;
    try{
        const trendWish =await Wish.findAll({where : {loginId : loginId , categoryId : categoryId}});
        res.status(200).json({wishlist : trendWish , msg: `wishelist fetched for the categoryId ${categoryId}` }) 
    }catch(err){
        res.status(500).json({ err });
    }
}

module.exports = { updateWishlist , getAllWishes };
