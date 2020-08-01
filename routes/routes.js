const express = require('express');

const {
  homePage,
  login,
  contact,
  logout,
  createAdmin,
  newAdminValidationRules
} = require('../controller');

const {
  mentorApplication, applicationValidationRules, getAllMentors,
  getAllDeclinedMentors, getAllAcceptedMentors, getAllPendingMentors,
  acceptApplication, declineApplication
} = require('../controller/mentor');

const { internApply, internValidationRules } = require('../controller/internController');

const router = express.Router();

// Admin routes
router.get('/', homePage);
router.post('/auth', login);
router.get('/logout', logout);
router.post('/admin/create', newAdminValidationRules(), createAdmin);

router.post('/contact-us', contact);
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
