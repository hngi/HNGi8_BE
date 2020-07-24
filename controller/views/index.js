const homePage = (req, res) => {
  res.render('pages/homePage', { title: 'home page' });
};

module.exports = {
  homePage
};
