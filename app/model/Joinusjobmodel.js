const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const Jobrole = sequelize.define('jobrole',{
  id: {
    type: DataTypes.BIGINT,
    autoIncrement : true,
    allowNull: false,
    primaryKey: true,
  },
  role:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  location:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  department:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  joblocation:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Job_Description:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Position_Title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Experience:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Qualification:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Job_type:{
    type: DataTypes.STRING,
    allowNull:false, 
  },
  Salary:{
    type: DataTypes.STRING,
    allowNull:false,
  },
});
module.exports = Jobrole;