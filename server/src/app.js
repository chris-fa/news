const express = require('express');
const path = require('path');
const morgan = require('morgan');

const config = require('./config');
const logger = require('./logger');
const db = require('./db');
const aboutRouter = require('./routes/about');
const postsRouter = require('./routes/posts');

const app = express();

const isDevelopment = config.ENV === 'development';
const isTesting = config.ENV === 'test';
const isProduction = config.ENV === 'production';

db.authenticate()
  .then(() => logger.info('Connected to Mysql'))
  .catch(err => logger.error('Unable to connect to Mysql:', err));

if (! isTesting) {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/about', aboutRouter);
app.use('/posts', postsRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const message = err.message;
  const stack = isDevelopment ? err.stack : {};

  // We want the error stack when doing TDD
  if (isTesting) {
    console.error(err.stack);
  }

  res.status(err.status || 500);

  res.json({
    stack,
    message,
  });
});

app.on('close', () => db.close());

module.exports = app;
