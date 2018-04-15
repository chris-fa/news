const express = require('express');
const path = require('path');
const logger = require('morgan');

const aboutRouter = require('./routes/about');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use(express.json());

app.use('/about', aboutRouter);

module.exports = app;
