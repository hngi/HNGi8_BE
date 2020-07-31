const express = require('express');
const auth = require('../../middleware/auth');

const {
  homePage,
  login,
  internSignup,
  mentorSignup,
  dashboard,
  lastInternship,
  contact,
  faqs,
  adminCreate,
  viewAdmins,
} = require('../../controller/views/index');

const { mentors } = require('../../controller/views');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/apply', internSignup);

viewRouter.get('/contact', contact);

viewRouter.get('/mentors/apply', mentorSignup);

viewRouter.get('/mentors', mentors);

viewRouter.get('/faqs', faqs);

viewRouter.get('/dashboard', auth, dashboard);

viewRouter.get('/admin/create', auth, adminCreate);

viewRouter.get('/admins', viewAdmins);

viewRouter.get('/hngi7', lastInternship);

viewRouter.get('/test', (req, res) => {
  res.render('pages/test', {
    title: 'test page',
    name: 'test user'
  });
});
module.exports = viewRouter;
