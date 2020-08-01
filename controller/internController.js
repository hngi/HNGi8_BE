/* eslint-disable no-console */
const { body, validationResult } = require('express-validator');
const Intern = require('../models/Intern');
const responseHandler = require('../utils/responseHandler');

// Intern Validation rules
const internValidationRules = () => [
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('phoneNumber').isMobilePhone()
];

// Intern application
const internApply = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err.forEach((er) => {
      const message = `${er.msg} in ${er.param}`;
      req.flash('error', message);
    });
    // return next(new ErrorHandler(400, message));
    return res.redirect('/apply');
  }

  const { email } = req.body;
  try {
    // check if the email is already in use
    const intern = await Intern.findOne({ email });
    if (intern) {
      req.flash('error', 'Email address already used for application');
      res.redirect('/apply');
    //   throw new ErrorHandler(400, 'Email already used for application');
    }

    // input the date of birth in req.body
    req.body.dob = new Date(req.body.dob);

    // create the new intern application
    let newIntern = new Intern(req.body);
    console.log(req.body);

    // save the application
    newIntern = await newIntern.save();
    console.log(newIntern);

    // return the response on success
    req.flash('success', 'Application successful. We will reach out to you.');
    return res.redirect('/apply');
    // return responseHandler(res, 201, 'Application successful', { intern: newIntern });
  } catch (err) {
    req.flash('error', err.message);
    return res.redirect('/apply');
  }
};

// Get all mentor applications
const getAllInterns = async (req, res, next) => {
  const queryArray = [];
  const params = req.query;
  
  // Query parameter is assigned as an object and added to the query array
  Object.entries(params).forEach((param) => {
    const queryObj = { [param[0]]: param[1] };
    queryArray.push(queryObj);
  });
  
  // this is added to return all applications, when no query param is present
  queryArray.push({});
  try {
    const interns = await Intern.find({ $and: queryArray })
      .sort({ updatedAt: 'desc' });
    return responseHandler(res, 200, 'All intern applications', { interns });
  } catch (err) {
    return next(err);
  }
};

// Get all accepted intern applications
const getAllAcceptedInterns = async (req, res, next) => {
  const queryArray = [];
  const params = req.query;

  // Query parameter is assigned as an object and added to the query array
  Object.entries(params).forEach((param) => {
    const queryObj = { [param[0]]: param[1] };
    queryArray.push(queryObj);
  });

  // this is added to return all applications, when no query param is present
  queryArray.push({ internApplicationStatus: 'accepted' });
  try {
    const interns = await Intern.find({ $and: queryArray });
    return responseHandler(res, 200, 'All accepted intern applications', { interns });
  } catch (err) {
    return next(err);
  }
};

// Get all pending intern applications
const getAllPendingInterns = async (req, res, next) => {
  const queryArray = [];
  const params = req.query;

  // Query parameter is assigned as an object and added to the query array
  Object.entries(params).forEach((param) => {
    const queryObj = { [param[0]]: param[1] };
    queryArray.push(queryObj);
  });

  // this is added to return all applications, when no query param is present
  queryArray.push({ internApplicationStatus: 'pending' });
  try {
    const interns = await Intern.find({ $and: queryArray });
    return responseHandler(res, 200, 'All pending intern applications', { interns });
  } catch (err) {
    return next(err);
  }
};

// Get all declined intern applications
const getAllDeclinedInterns = async (req, res, next) => {
  const queryArray = [];
  const params = req.query;
  
 // Query parameter is assigned as an object and added to the query array
  Object.entries(params).forEach((param) => {
    const queryObj = { [param[0]]: param[1] };
    queryArray.push(queryObj);
  });
  // this is added to return all applications, when no query param is present
  queryArray.push({ internApplicationStatus: 'declined' });
  try {
    const interns = await Intern.find({ $and: queryArray });
    return responseHandler(res, 200, 'All declined intern applications', { interns });
  } catch (err) {
    return next(err);
  }
};


module.exports = {
  internValidationRules,
  internApply,
  getAllInterns,
  getAllAcceptedInterns,
  getAllPendingInterns,
  getAllDeclinedInterns
};
