const express = require('express');
const auth = require('../../middleware/auth');

const {
  homePage,
  login,
  intern,
  mentors,
  dashboard,
  contact,
  internSignup,
  mentorSignup,
} = require('../../controller/views/index');

const { mentors } = require('../../controller/views');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/apply', internSignup);

viewRouter.get('/mentors/apply', mentorSignup);

viewRouter.get('/contact', contact);

viewRouter.get('/mentors', mentors);

viewRouter.get('/dashboard', auth, dashboard);

module.exports = viewRouter;
