const { body, validationResult } = require('express-validator');
const Mentor = require('../models/Mentor');
const { ErrorHandler } = require('../utils/error');
const responseHandler = require('../utils/responseHandler');
// Application rules
const applicationValidationRules = () => [
  body('name').isString(),
  body('email').isEmail(),
  body('phoneNumber').isMobilePhone(),
  body('cvLink').optional().isURL()
];

// mentor application
const mentorApplication = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    const message = `${err[0].msg} in ${err[0].param}`;
    return next(new ErrorHandler(400, message));
  }

  const { email } = req.body;
  try {
    // check if the email is already in use
    const mentor = await Mentor.findOne({ email });
    if (mentor) {
      throw new ErrorHandler(400, 'Email already used for application');
    }
    // create the new mentor application
    let newMentor = new Mentor(req.body);
    // save the application
    newMentor = await newMentor.save();
    // return the response on success
    return responseHandler(res, 201, 'Application successful', { mentor: newMentor });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  applicationValidationRules,
  mentorApplication
};
