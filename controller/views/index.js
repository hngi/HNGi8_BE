const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'home page' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'login' });
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
  mentor
};
