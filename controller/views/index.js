const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  if (req.session.auth) {
    res.redirect('/dashboard');
  }
  res.render('pages/login', { title: 'Login' });
};

const internSignup = (req, res) => {
  res.render('pages/intern-signup', { title: 'Apply' });
};

const mentorSignup = (req, res) => {
  res.render('pages/mentor-signup', { title: 'Mentor Signup' });
};

const faqs = (req, res) => {
  res.render('pages/faqs', { title: 'FAQs' });
};

const mentors = (req, res) => {
  res.render('pages/mentors', { title: 'Mentors' });
};

const contact = (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
};

const dashboard = (req, res) => {
  res.render('pages/dashboard', { title: 'Dashboard' });
};

const lastInternship = (req, res) => {
  res.render('pages/hngi7', { title: 'HNGi7 Summary' });
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
  faqs
};
