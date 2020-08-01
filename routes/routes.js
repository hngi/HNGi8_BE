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

const { internApply, internValidationRules, getAllInterns,  getAllAcceptedInterns, getAllPendingInterns, getAllDeclinedInterns,
  acceptInternApplication, declineInternApplication } = require('../controller/internController');

const router = express.Router();

// Admin routes
router.get('/', homePage);
router.post('/auth', login);
router.get('/logout', logout);
router.post('/admin/create', newAdminValidationRules(), createAdmin);

router.post('/contact-us', contact);

// Intern routes
router.post('/apply', internValidationRules(), internApply);
router.get('/apply', getAllInterns);
router.get('/apply/accepted', getAllAcceptedInterns);
router.get('/apply/pending', getAllPendingInterns);
router.get('/apply/declined', getAllDeclinedInterns);

// mentor routes
router.post('/mentors/apply', applicationValidationRules(), mentorApplication);
router.get('/mentors/pending', getAllPendingMentors);
router.get('/mentors/accepted', getAllAcceptedMentors);
router.get('/mentors/declined', getAllDeclinedMentors);
router.get('/mentors', getAllMentors);
router.patch('/mentors/:id/accept', acceptApplication);
router.patch('/mentors/:id/decline', declineApplication);

module.exports = router;
