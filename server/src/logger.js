const config = require('./config');

const shouldLog = config.ENV !== 'test';

module.exports = {
  info: (...params) => shouldLog && console.log(...params),
  error: (...params) => shouldLog && console.error(...params),
};
