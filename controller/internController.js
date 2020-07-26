const Intern = require('../models/InternApplication');
const models = require('../models');

// Display intern CREATE form on GET.
exports.intern_create_get = function (req, res, next) {
  res.render('forms/intern_form', { title: 'Create Intern', layout: 'layouts/detail' });
};

// Handle intern CREATE on POST.
exports.intern_create_post = function (req, res, next) {
  models.Intern.create({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    track: req.body.track,
    country: req.body.country,
    state: req.body.state,
    employmentStatus: req.body.employmentStatus,
    about: req.body.about
  }).then((intern) => {
    console.log('rendering intern created successfully');
    res.redirect(`/intern${intern.id}`);
  }).catch((error) => {
    console.log('There was an error');
    res.status(404).send(error);
  });
};

// Display intern DELETE form on GET.
exports.intern_delete_get = function (req, res, next) {
  models.Intern.destroy({
    where: {
      id: req.params.intern_id
    }
  }).then(() => {
    res.redirect('/intern');
    console.log('Intern deleted successfully');
  });
};

// Handle intern DELETE on POST.
exports.intern_delete_post = function (req, res, next) {
  models.Intern.destroy({
    where: {
      id: req.params.intern_id
    }
  }).then(() => res.json({
    success: 'Intern Deleted Successfully'
  })).catch((error) => {
    res.status(404).send(error);
  });
};

// Display intern UPDATE form on GET.
exports.intern_update_get = function (req, res, next) {
  // Find the intern you want to update
  console.log(`ID is ${req.params.intern_id}`);
  models.Intern.findById(
    req.params.intern_id
  ).then((intern) => {
    // renders a post form
    res.render('forms/intern_form', { title: 'Update Intern', intern, layout: 'layouts/detail' });
    console.log('Intern update successful');
  });
};

// Handle intern UPDATE on POST
exports.intern_update_post = function (req, res, next) {
  console.log(`ID is ${req.params.intern_id}`);
  models.Intern.update(
    // Values to update
    {
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      track: req.body.track,
      country: req.body.country,
      state: req.body.state,
      employmentStatus: req.body.employmentStatus,
      about: req.body.about
    },
    {
      where:
            {
              id: req.params.intern_id
            }
    }
  );
  models.Intern.findById(req.params.intern_id).then((intern) => {
    console.log('rendering intern updated successfully');
    console.log(intern);
    res.redirect(`/intern/${intern.id}?message=Profile edit was successful!`);
  }).catch((error) => {
    console.log(`There was an error: ${error}`);
    res.status(404).send(error);
  });
};

// DISPLAY list of all interns.
exports.intern_list = function (req, res, next) {
  models.Intern.findAll().then((interns) => {
    console.log('rendering intern lists successfully');
    res.render('pages/intern_list', { title: 'Intern List', interns, layout: 'layouts/list' });
  }).catch((error) => {
    console.log(`There was an error: ${error}`);
    res.status(404).send(error);
  });
};

// DISPLAY detail page for a specific intern.
exports.intern_detail = function (req, res, next) {
  console.log(`ID = ${req.params.intern_id}`);
  models.Intern.findById(
    req.params.intern_id
  ).then((intern) => {
    models.Intern.findAll({
      where: {
        InternId: intern.id
      }
    }).then((interns) => {
      console.log('rendering intern detail successfully');
      res.render('pages/intern_detail', { title: 'Intern Details', intern, layout: 'layouts/detail' });
    });
  }).catch((error) => {
    console.log(`There was an error: ${error}`);
    res.status(404).send(error);
  });
};
