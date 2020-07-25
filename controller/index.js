const { isEmpty, isEmail } = require('validator');
const bcrypt = require('bcryptjs');
const Admins = require('../models/AdminLogin');

const homePage = (req, res) => {
  res.json('Home page');
};

// Admin Login
const login = (req, res) => {
  const { email, password } = req.body;
  if (isEmpty(email) || isEmpty(password)) {
    req.flash('error', 'All fields are required');
    res.redirect('/login');
  }
  if (!isEmail(email)) {
    req.flash('error', 'Please enter a valid email');
    res.redirect('/login');
  }

  Admins.findOne({ email }).then((admin) => {
    if (!admin) {
      req.flash('error', 'Email does not exist in our record');
      res.redirect('/login');
    } else {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (result) {
          req.session.auth = true;
          req.session.email = admin.email;
          req.session.role = admin.role;
          req.flash('success', 'Welcome back, You\'re logged in');
          res.redirect('/dashboard');
        } else {
          req.flash('error', 'Invalid Password');
          res.redirect('/login');
        }
      });
    }
  }).catch((err) => {
    res.json('Errr');
  });
};

exports.logout = (req, res) => {
  req.session.auth = false;
  req.session.email = null;
  res.redirect('/');
};

module.exports = {
  homePage,
  login
};
