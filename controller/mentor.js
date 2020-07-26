const { body, validationResult } = require('express-validator');
const Mentor = require('../models/Mentor');
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
    // create the new mentor application
    let newMentor = new Mentor(req.body);
    // save the application
    newMentor = await newMentor.save();
    console.log(newMentor);
    // return the response on success
    req.flash('success', 'Application successful. We will reach out to you.');
    return res.redirect('/mentors/apply');
    // return responseHandler(res, 201, 'Application successful', { mentor: newMentor });
  } catch (err) {
    req.flash('error', err.message);
    return res.redirect('/mentors/apply');
  }
};

module.exports = {
  applicationValidationRules,
  mentorApplication
};
