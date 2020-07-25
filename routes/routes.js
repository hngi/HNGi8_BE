const express = require('express');
const multer = require('multer');

const { homePage, login, contact } = require('../controller');

const { mentorApplication, applicationValidationRules } = require('../controller/mentor');

const upload = multer();
const router = express.Router();

router.get('/', homePage);
router.post('/mentor/apply', upload.none(), applicationValidationRules(), mentorApplication);
router.post('/auth', login);
router.post('/contact-us', contact);

module.exports = router;
