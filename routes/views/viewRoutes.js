const express = require('express');
const auth = require('../../middleware/auth');

const {
  homePage,
  login,
  internSignup,
  mentorSignup,
  dashboard
} = require('../../controller/views/index');

const { mentors } = require('../../controller/views');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/apply', internSignup);

viewRouter.get('/mentors/apply', mentorSignup);

viewRouter.get('/mentors', mentors);
viewRouter.get('/dashboard', auth, dashboard);
module.exports = viewRouter;
