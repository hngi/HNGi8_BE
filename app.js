require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const apiRouter = require('./routes/routes');
const { handleError } = require('./utils/error');
const viewRouter = require('./routes/views/viewRoutes');
const { sessionKey } = require('./config');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: sessionKey,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

// All routes goes here
/// api routes which will be irrivent now
app.use('/api/v1', apiRouter);
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
