const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');
const Login = require('./userLoginmodel'); // Correct the import statement

const Wish = sequelize.define('Wish' , {
    id : {
        type : DataTypes.INTEGER ,
        primaryKey : true , 
        allowNull : false ,
        autoIncrement : true,
    },
    index : {
        type : DataTypes.STRING,
        allowNull : false
    },
    loginId : {
        type : DataTypes.STRING ,
        allowNull : false ,
    },
    categoryId : {
        type : DataTypes.STRING,
        allowNull : false
    }
});


module.exports = Wish;
