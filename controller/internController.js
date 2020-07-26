const { body, validationResult } = require('express-validator');
const Intern = require('../models/Intern');

// Application rules
const applicationValidationRules = () => [
  body('fullName').isString(),
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
    
    // create the new intern application
    let newIntern = new Intern(req.body);
    
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

module.exports = {
  applicationValidationRules,
  internApply
};
