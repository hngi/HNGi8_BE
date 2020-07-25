const express = require('express');

const {
  homePage,
  login,
  intern,
  mentorSignup,
} = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

viewRouter.get('/mentors/signup', mentorSignup);

module.exports = viewRouter;
