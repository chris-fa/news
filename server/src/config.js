const path = require('path');
const dotenv = require('dotenv');

const logger = require('./logger');

const env = process.env.NODE_ENV || 'development';

const filename = env === 'test' ? '.env.test' : '.env';

const result = dotenv.config({
  path: path.resolve(process.cwd(), filename)
});

if (result.error) {
  throw result.error;
}

[ `Environment: ${env}`, `Dotenv file: ${filename}`, ]
  .map(message => logger.info(message));

module.exports = {
  ENV: env,
  DEBUG: process.env.DEBUG || false,
  DB: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
  },
};
