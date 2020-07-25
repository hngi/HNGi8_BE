const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

const internSignup = (req, res) => {
  res.render('pages/intern-signup', { title: 'Apply' });
};

const mentorSignup = (req, res) => {
  res.render('pages/mentor-signup', { title: 'Mentor Signup' });
};

module.exports = {
  internSignup,
  homePage,
  login,
  mentorSignup,
};
