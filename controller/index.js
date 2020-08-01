/* eslint-disable new-cap */
/* eslint-disable no-console */
const { isEmpty, isEmail } = require('validator');
const bcrypt = require('bcryptjs');
const Admins = require('../models/AdminLogin');
const contactModel = require('../models/Contact');

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
          req.session.lastVisited = req.session.visited || Date.now();
          req.session.visited = Date.now();
          req.session.name = admin.name;
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

const logout = (req, res) => {
  req.session.auth = false;
  req.session.email = null;
  req.session.name = null;
  req.session.role = null;
  res.redirect('/');
};

const contact = (req, res) => {
  const {
    name, email, subject, message
  } = req.body;
  const newContact = new contactModel({
    name, email, subject, message
  });
  newContact.save().then(() => {
    req.flash('success', 'Thanks for contacting us...');
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
    req.flash('error', 'comment not saved please try again');
    res.redirect('/contact');
  });
};

const createAdmin = (req, res, next) => {
  const {
    firstname, lastname, email, role, adminpassword
  } = req.body;
  Admins.findOne({ email }).then(
    (newAdmin) => {
      if (!newAdmin) {
        req.flash('error', `user with this ${email} already exits`);
      }

      bcrypt.hash(adminpassword, 10).then((hash) => {
        const admin = new Admins({
          name: `${lastname} ${firstname}`,
          password: hash,
          email,
          role: role === 'admin' ? role : 'superAdmin'
        });
        admin.save().then(
          () => { res.flash('success', `${role} Created successfully`); }
        ).catch((error) => { req.flash('error', error); });
      });
    }
  ).catch((err) => { next(err); });
};
module.exports = {
  homePage,
  login,
  logout,
  contact,
  createAdmin
};
