const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'Home' });
};

const login = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

const intern = (req, res) => {
  res.render('pages/intern', { title: 'Intern' });
};

const mentors = (req, res) => {
  res.render('pages/mentors', { title: 'Mentors' });
};

module.exports = {
  intern,
  homePage,
  login,
  mentors
};
