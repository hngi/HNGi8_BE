const express = require('express');
const multer = require('multer');

const { homePage, login } = require('../controller');

const { mentorApplication, applicationValidationRules } = require('../controller/mentor');

const upload = multer();
const router = express.Router();

router.get('/', homePage);
router.post('/mentor/apply', upload.none(), applicationValidationRules(), mentorApplication);
router.post('/auth', login);

module.exports = router;
