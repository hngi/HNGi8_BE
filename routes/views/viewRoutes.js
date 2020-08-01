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
  viewNotifications
} = require('../../controller/views/index');

const { mentors } = require('../../controller/views');
const AdminLogin = require('../../models/AdminLogin');

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

viewRouter.get('/admins', auth, viewAdmins);

viewRouter.get('/notifications', auth, viewNotifications);

viewRouter.get('/hngi7', lastInternship);

viewRouter.get('/delete-admin', auth, async (req, res) => {
  const apiName = req.query.name;
  await AdminLogin.deleteOne({ name: apiName });
  req.flash('success', 'API Disapproved');
});

viewRouter.get('/view-admin', auth, async (req, res) => {
  const { name } = req.query;
  const admin = await AdminLogin.find({ name });
  req.flash('success', ...admin);
});

viewRouter.get('/test', (req, res) => {
  res.render('pages/test', {
    title: 'test page',
    name: 'test user'
  });
});
module.exports = viewRouter;
