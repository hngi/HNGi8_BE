const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'home page' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'login' });
};

module.exports = {
  homePage,
  login
};
