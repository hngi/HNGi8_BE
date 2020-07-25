const express = require('express');
const auth = require('../../middleware/auth');

const {
  homePage,
  login,
  intern,
  mentors,
  dashboard,
  contact
} = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

viewRouter.get('/contact', contact);

viewRouter.get('/mentors', mentors);
viewRouter.get('/dashboard', auth, dashboard);
module.exports = viewRouter;
