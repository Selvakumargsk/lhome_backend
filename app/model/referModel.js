const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const referUser = sequelize.define('referUser' ,{
    id:{
        type : DataTypes.BIGINT ,
        autoIncrement : true,
        primaryKey : true
    },
    userId : {
        type : DataTypes.STRING,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false
    },
    number : {
        type : DataTypes.STRING,
        allowNull : false
    },
    city : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    }
});

module.exports = referUser;