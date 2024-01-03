const { DataTypes } = require('sequelize');
const sequelize=require('../utilsFunction/dbFunctions');

const Designsession=sequelize.define('Designsession',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },
    own:{
        type:DataTypes.STRING,
        allowNull:false
    },
    floorplan:{
        type:DataTypes.STRING,
        allowNull:false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    planning:{
        type:DataTypes.STRING,
        allowNull:false
    },
    looking:{
        type:DataTypes.STRING,
        allowNull:false
    },
    budget:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Possession:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nearestcentre:{
       type:DataTypes.STRING,
       allowNull:false 
    },
    meetingdate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    meetingtime:{
       type:DataTypes.STRING,
       allowNull:false 
    } 
})

module.exports= Designsession;
