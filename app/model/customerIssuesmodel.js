const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const Customerissue = sequelize.define('Customerissue' , {
    id : {
        type : DataTypes.BIGINT,
        primaryKey: true ,
        autoIncrement : true
    },
    userId : {
        type : DataTypes.STRING,
        allowNull : false ,
    },
    issue : {
        type : DataTypes.STRING ,
        allowNull : false
    }
});

module.exports = Customerissue;