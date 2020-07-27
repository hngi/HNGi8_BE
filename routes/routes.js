const express = require('express');

const { homePage, login, contact } = require('../controller');

const {
  mentorApplication, applicationValidationRules, getAllMentors,
  getAllDeclinedMentors, getAllActiveMentors, getAllPendingMentors
} = require('../controller/mentor');

const { internApply, internValidationRules } = require('../controller/internController');

const router = express.Router();

router.get('/', homePage);
router.post('/auth', login);
router.post('/contact-us', contact);
router.post('/apply', internValidationRules(), internApply);

// mentor routes
router.post('/mentors/apply', applicationValidationRules(), mentorApplication);
router.get('/mentors/pending', getAllPendingMentors);
router.get('/mentors', getAllMentors);
router.get('/mentors/accepted', getAllActiveMentors);
router.get('/mentors/declined', getAllDeclinedMentors);

module.exports = router;
