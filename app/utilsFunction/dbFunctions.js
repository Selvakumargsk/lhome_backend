const { Sequelize } = require("sequelize");
require('dotenv/config');

const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pwd = process.env.DB_PWD;

const sequelize = new Sequelize(db_name , db_user , db_pwd , {
    host : db_host,
    dialect : 'postgres'
  });

module.exports = sequelize;  