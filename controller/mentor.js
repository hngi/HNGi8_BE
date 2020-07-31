const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Mentor = require('../models/Mentor');
const responseHandler = require('../utils/responseHandler');
const { ErrorHandler } = require('../utils/error');

// Application rules
const applicationValidationRules = () => [
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('phoneNumber').isMobilePhone(),
  body('cvLink').optional().isURL()
];

// mentor application
const mentorApplication = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    err.forEach((er) => {
      const message = `${er.msg} in ${er.param}`;
      req.flash('error', message);
    });
    // return next(new ErrorHandler(400, message));
    return res.redirect('/mentors/apply');
  }

  const { email } = req.body;
  try {
    // check if the email is already in use
    const mentor = await Mentor.findOne({ email });
    if (mentor) {
      req.flash('error', 'Email address already used for application');
      res.redirect('/mentors/apply');
    //   throw new ErrorHandler(400, 'Email already used for application');
    }
    // Fix the date of birth in req.body
    req.body.dob = new Date(req.body.dob);
    // create the new mentor application
    let newMentor = new Mentor(req.body);
    // save the application
    // eslint-disable-next-line no-unused-vars
    newMentor = await newMentor.save();
    // return the response on success
    req.flash('success', 'Application successful. We will reach out to you.');
    return res.redirect('/mentors/apply');
    // return responseHandler(res, 201, 'Application successful', { mentor: newMentor });
  } catch (err) {
    req.flash('error', err.message);
    return res.redirect('/mentors/apply');
  }
};
// Get all mentor applications
const getAllMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find({})
      .sort({ updatedAt: 'desc' });
    return responseHandler(res, 200, 'All mentor applications', { mentors });
  } catch (err) {
    return next(err);
  }
};

// Get all pending mentor applications
const getAllPendingMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find({ applicationState: 'pending' });
    return responseHandler(res, 200, 'All pending mentor applications', { mentors });
  } catch (err) {
    return next(err);
  }
};

// Get all accepted mentor applications
const getAllAcceptedMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find({ applicationState: 'accepted' });
    return responseHandler(res, 200, 'All accepted mentor applications', { mentors });
  } catch (err) {
    return next(err);
  }
};

const getAllDeclinedMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find({ applicationState: 'declined' });
    return responseHandler(res, 200, 'All decliined mentor applications', { mentors });
  } catch (err) {
    return next(err);
  }
};

// accept a mentors application
const acceptApplication = async (req, res, next) => {
  const mentorId = req.params.id;

  if (!mongoose.isValidObjectId(mentorId)) {
    return next(new ErrorHandler(400, 'Invalid Id for mentor'));
  }

  try {
    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      throw new ErrorHandler(404, 'Mentor with Id not found');
    }

    await mentor.update({ applicationState: 'accepted' });
    return res.send({
      status: 'success',
      message: 'Mentor application accepted'
    });
  } catch (err) {
    return next(err);
  }
};

// Added functionality to decline a mentors application
const declineApplication = async (req, res, next) => {
  const mentorId = req.params.id;
  if (!mongoose.isValidObjectId(mentorId)) {
    return next(new ErrorHandler(400, 'Invalid Id for mentor'));
  }

  try {
    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      throw new ErrorHandler(404, 'Mentor with Id not found');
    }

    await mentor.update({ applicationState: 'declined' });
    return res.send({
      status: 'success',
      message: 'Mentor application declined'
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  applicationValidationRules,
  mentorApplication,
  getAllMentors,
  getAllAcceptedMentors,
  getAllDeclinedMentors,
  getAllPendingMentors,
  acceptApplication,
  declineApplication
};
