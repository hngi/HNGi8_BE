const express = require('express');

const {
  homePage, login, contact, logout
} = require('../controller');

const { mentorApplication, applicationValidationRules } = require('../controller/mentor');

const { internApply, internValidationRules } = require('../controller/internController');

const router = express.Router();

router.get('/', homePage);
router.post('/mentors/apply', applicationValidationRules(), mentorApplication);
router.post('/auth', login);
router.post('/contact-us', contact);
router.get('/logout', logout);
router.post('/apply', internValidationRules(), internApply);

module.exports = router;
