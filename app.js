require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const { handleError } = require('./utils/error');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Express error middleware
app.use((err, req, res, next) => {
  next(handleError(res, err));
});
// Unknown endpoints middleware
app.use('*', (req, res) => {
  const url = req.originalUrl;
  res.status(404).send({
    status: 'error',
    message: `Oops. ${req.method} ${url} not found on this website`
  });
});

module.exports = app;
