const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'home page' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'login' });
};

const intern = (req, res) => {
  res.render('pages/intern', { title: 'Intern' });
};

module.exports = {
  intern,
  homePage,
  login
};
