const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

const intern = (req, res) => {
  res.render('pages/intern', { title: 'intern' });
};

const mentor = (req, res) => {
  res.render('pages/mentor', { title: 'mentor' });
};

module.exports = {
  intern,
  homePage,
  login,
};
