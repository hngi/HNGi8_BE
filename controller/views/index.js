const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  if (req.session.auth) {
    res.redirect('/dashboard');
  }
  res.render('pages/login', { title: 'Login' });
};

const intern = (req, res) => {
  res.render('pages/intern', { title: 'Intern' });
};

const contact = (req, res) => {
  res.render('pages/contact', { title: 'Contact' });

const internSignup = (req, res) => {
  res.render('pages/intern-signup', { title: 'Apply' });
};

const mentorSignup = (req, res) => {
  res.render('pages/mentor-signup', { title: 'Mentor Signup' });
};

const mentors = (req, res) => {
  res.render('pages/mentors', { title: 'Mentors' });
};

const dashboard = (req, res) => {
  res.render('pages/dashboard');
};

module.exports = {
  internSignup,
  homePage,
  login,
  mentors,
  dashboard,
  contact,
  intern,
  mentorSignup};