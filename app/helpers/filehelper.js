'use strict';
const multer = require('multer');
const path = require('path');
const rootDir = require('../utilsFunction/path');
const portfolioDir = path.join(rootDir , 'uploads' , 'Portfolio');
const resumesDir = path.join(rootDir , 'uploads' , 'resume');
// var upload = multer({dest:'./upload/'});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'portfolio') {          
            cb(null, portfolioDir);
          } else if (file.fieldname === 'resume') {
            cb(null, resumesDir);
          } else {
            cb(new Error('Invalid field name'));
          }
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
const filefilter = (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.ms-powerpoint' 
        || file.mimetype ===  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        || file.mimetype === 'text/plain' || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
        || file.mimetype === "video/mp4" || file.mimetype === "application/mp4" || ext !== ".mkv" || ext !== ".mp4"){
            cb(null, true);
        }
    else if(ext === ".pdf" || ext === ".docx") {
        return cb(new Error("only pdf and docx are allowed"));
    }   
    else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});

module.exports = {upload}
