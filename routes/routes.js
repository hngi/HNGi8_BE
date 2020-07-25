const express = require('express');
const multer = require('multer');
const { homePage } = require('../controller');

const { mentorApplication, applicationValidationRules } = require('../controller/mentor');

const upload = multer();
const router = express.Router();

router.get('/', homePage);
router.post('/mentor/apply', upload.none(), applicationValidationRules(), mentorApplication);
module.exports = router;
