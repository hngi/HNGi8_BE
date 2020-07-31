const express = require('express');

const {
  homePage, login, contact, logout
} = require('../controller');

const {
  mentorApplication, applicationValidationRules, getAllMentors,
  getAllDeclinedMentors, getAllAcceptedMentors, getAllPendingMentors,
  acceptApplication, declineApplication
} = require('../controller/mentor');

const { internApply, internValidationRules } = require('../controller/internController');

const router = express.Router();

router.get('/', homePage);
router.post('/auth', login);
router.post('/contact-us', contact);
router.get('/logout', logout);
router.post('/apply', internValidationRules(), internApply);

// mentor routes
router.post('/mentors/apply', applicationValidationRules(), mentorApplication);
router.get('/mentors/pending', getAllPendingMentors);
router.get('/mentors/accepted', getAllAcceptedMentors);
router.get('/mentors/declined', getAllDeclinedMentors);
router.get('/mentors', getAllMentors);
router.patch('/mentors/:id/accept', acceptApplication);
router.patch('/mentors/:id/decline', declineApplication);

module.exports = router;
