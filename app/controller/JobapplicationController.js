const JobApplication = require('../model/Jobapplicationmodel'); // Import your Sequelize model

// Controller functions
const PostJobApplication = async (req, res) => {
  try {
    const { firstname, lastname, email, phno, currentctc, expectedctc, location, nperiod } = req.body;
    const { portfolio, resume } = req.files;
    let Portfolio;

    if( Array.isArray(portfolio) && portfolio[0].filename){
      Portfolio = portfolio[0].filename;
    }else{
      Portfolio = null
    }

    const newApplication = await JobApplication.create({
      firstname,
      lastname,
      email,
      phno,
      currentctc,
      expectedctc,
      location,
      nperiod,
      Portfolio,
      resume: resume[0].filename,
    });
    return res.status(201).json({ message: 'JobApplication posted Successfully', newApplication });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const GetAllJobApplications = async (req, res) => {
  try {
    const JobApplicationList = await JobApplication.findAll();
    if (!JobApplicationList) {
      return res.status(404).json({ message: 'JobApplication not found' });
    }
    return res.status(200).json({ msg: "JobApplication list fetched successfully", JobApplicationList: JobApplicationList });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// Export controller functions
module.exports = { PostJobApplication, GetAllJobApplications };
