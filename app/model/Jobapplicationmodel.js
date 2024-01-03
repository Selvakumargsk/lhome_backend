const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const JobApplication = sequelize.define('jobapplication', {

  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  phno: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/i,
    }
  },

  currentctc: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  expectedctc: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nperiod: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  Portfolio: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = JobApplication;
