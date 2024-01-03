const express= require('express');

const { registerUser } = require('../app/controller/RegistrationController');
const { sendOTP, verifyOTPAndCreateSession, resendOtp } = require('../app/controller/userLoginController');
const { updateWishlist, getAllWishes } = require('../app/controller/wishController');
const { postIssue, getIssueList } = require('../app/controller/customerIssuesController');
const { PostJobrole, getJobRoleList, getJobRoleById } = require('../app/controller/JobRoleController');
const { PostJobApplication, GetAllJobApplications } = require('../app/controller/JobapplicationController');
const {DesignsessionBooking}=require('../app/controller/DesignsessionController');
const {ChatBotUser}=require('../app/controller/ChatBotUserDetailsController');
const router = express.Router();
const {upload} = require('../app/helpers/filehelper');
const { postReferUser } = require('../app/controller/referUserController');

router.get('/' , (req , res)=>{
    res.send('new project created')
});

router.post('/register' , registerUser);

router.post('/signin' , sendOTP);

router.post('/resend' , resendOtp)

router.post('/signin/auth' ,verifyOTPAndCreateSession );

router.post('/wish/:index' , updateWishlist);

router.post('/wishes' , getAllWishes);

router.post('/postissue' , postIssue);

router.post('/fetchList' , getIssueList);

router.post('/jobroleList', PostJobrole);

router.post('/roleList', getJobRoleList);

router.get('/roleList/:id',getJobRoleById);

router.post('/jobApplication',upload.fields([
    { name: 'portfolio', maxCount: 1 },
    { name: 'resume', maxCount: 1 }]), PostJobApplication); 

router.get('/jobApplicationList',GetAllJobApplications); 

router.post('/bookingsession',DesignsessionBooking);

router.post('/chatbot',ChatBotUser);

router.post('/referUser' , postReferUser)

module.exports = router;