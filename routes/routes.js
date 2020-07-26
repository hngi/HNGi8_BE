const express = require('express');

const { homePage, login, contact } = require('../controller');

const { mentorApplication, applicationValidationRules } = require('../controller/mentor');

const { internApply, applicationValidationRules } = require('../controller/internController');

const router = express.Router();

router.get('/', homePage);
router.post('/mentors/apply', applicationValidationRules(), mentorApplication);
router.post('/auth', login);
router.post('/contact-us', contact);
router.post('/apply', applicationValidationRules(), internApply);

module.exports = router;
