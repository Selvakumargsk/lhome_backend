const { json } = require('sequelize');
const Customerissue = require('../model/customerIssuesmodel');

async function postIssue(req , res) {
    try{
        const {userId , issue} = req.body;
        const newIssue = await Customerissue.create({userId , issue});
        res.status(200).json({msg : "Customer issue posted" ,data : newIssue})
    }catch(err){
        console.log("error occured ", err);
        res.status(400).json({msg : 'error occured'})
    }
}

async function getIssueList(req , res){
    try{
        const { userId } = req.body;
        const IssueList = await Customerissue.findAll({where : {userId : userId}});
        res.status(200).json({msg : "Customer issue list fetched successfully" ,data : IssueList})
    }catch(err){
        console.log("error occured ", err);
        res.status(400).json({msg : 'error occured'})
    }
}

module.exports = {postIssue , getIssueList};