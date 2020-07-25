require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');

const homeRouter = require('./routes/routes');
const { handleError } = require('./utils/error');
const viewRouter = require('./routes/views/viewRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// All routes goes here
/// api routes which will be irrivent now
app.use('/v1', homeRouter);
/// view routes
app.use('/', viewRouter);

// Express error middleware
app.use((err, req, res, next) => handleError(res, err));

// Unknown endpoints middleware
app.use('*', (req, res) => {
  const url = req.originalUrl;
  res.status(404).send({
    status: 'error',
    message: `Oops. ${req.method} ${url} not found on this website`
  });
});

module.exports = app;
