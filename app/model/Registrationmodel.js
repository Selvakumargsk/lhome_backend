const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const User = sequelize.define('Lhome_User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement : true,
        // defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
  name : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number :{
    type : DataTypes.BIGINT ,
    allowNull: false ,
    unique: true,
    validate:{
        is: /^[0-9]{10}$/i,
    }
  },
  checkforwhatsapp : {
    type : DataTypes.BOOLEAN ,
    defaultValue : false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  pincode: {
    type : DataTypes.BIGINT,
    allowNull : false ,
  }

});

module.exports = User;