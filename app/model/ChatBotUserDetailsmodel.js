const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const ChatBotUserDetails = sequelize.define('ChatBotUserDetails', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  number :{
    type : DataTypes.BIGINT ,
    allowNull: false ,
    validate:{
        is: /^[0-9]{10}$/i,
    }
  },
  city : {
    type : DataTypes.STRING ,
    defaultValue : false,
  },

  message: {
    type : DataTypes.STRING,
    allowNull : true ,
  }

});

module.exports = ChatBotUserDetails;