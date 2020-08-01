const Admins = require('../../models/AdminLogin');

const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home', currentPage: 'home' });
};

const login = (req, res) => {
  if (req.session.auth) {
    res.redirect('/dashboard');
  }
  res.render('pages/login', { title: 'Login', currentPage: 'login' });
};

const internSignup = (req, res) => {
  res.render('pages/intern-signup', { title: 'Apply' });
};

const mentorSignup = (req, res) => {
  res.render('pages/mentor-signup', { title: 'Mentor Signup' });
};

const mentorsDashboard = (req, res) => {
  res.render('pages/dashboard-mentors', { title: 'Dashboard Mentors' });
};

const faqs = (req, res) => {
  res.render('pages/faqs', { title: 'FAQs' });
};

const mentors = (req, res) => {
  res.render('pages/mentors', { title: 'Mentors', currentPage: 'mentors' });
};

const contact = (req, res) => {
  res.render('pages/contact', { title: 'Contact', currentPage: 'contact' });
};

const dashboard = (req, res) => {
  res.render('pages/dashboard', {
    title: 'Dashboard',
    name: req.session.name,
    lastVisited: new Date(req.session.lastVisited).toGMTString()
  });
};

const viewAdmins = async (req, res) => {
  const admins = await Admins.find({});
  res.render('pages/admins', {
    title: 'Registered Admins',
    admins
  });
};

const lastInternship = (req, res) => {
  res.render('pages/hngi7', { title: 'HNGi7 Summary', currentPage: 'hngi7' });
};

const adminCreate = (req, res) => {
  res.render('pages/admin-create', { title: 'Admin Create' });
};

const viewNotifications = (req, res) => {
  res.render('pages/notifications', { title: 'Notifications' });
};

module.exports = {
  internSignup,
  homePage,
  login,
  mentorSignup,
  mentors,
  dashboard,
  lastInternship,
  contact,
  faqs,
  adminCreate,
  viewAdmins,
  viewNotifications,
  mentorsDashboard
};
