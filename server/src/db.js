const Sequelize = require('sequelize');

const config = require('./config');
const logger = require('./logger');

const sequelize = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
  host: config.DB.HOST,
  port: config.DB.PORT,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: config.DEBUG && logger.info,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize;
