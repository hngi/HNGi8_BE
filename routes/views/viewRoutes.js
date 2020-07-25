const express = require('express');

const {
  homePage,
  login,
  internSignup,
  mentorSignup,
} = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/apply', internSignup);

viewRouter.get('/mentors/signup', mentorSignup);

module.exports = viewRouter;
