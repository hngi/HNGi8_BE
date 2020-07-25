const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

const intern = (req, res) => {
  res.render('pages/intern', { title: 'Intern' });
};

const mentorSignup = (req, res) => {
  res.render('pages/mentor-signup', { title: 'Mentor Signup' });
};

module.exports = {
  intern,
  homePage,
  login,
  mentorSignup,
};
