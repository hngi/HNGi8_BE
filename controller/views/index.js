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
  res.render('pages/intern', { title: 'intern' });
};

const mentor = (req, res) => {
  res.render('pages/mentor', { title: 'mentor' });
};

const dashboard = (req, res) => {
  res.render('pages/dashboard');
};

module.exports = {
  intern,
  homePage,
  login,
  mentor,
  dashboard
};
