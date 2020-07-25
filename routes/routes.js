const express = require('express');

const { homePage } = require('../controller');

const { mentorApplication, applicationValidationRules} = require('../controller/mentor');

const router = express.Router();

router.get('/', homePage);
router.get('/test', applicationValidationRules(), mentorApplication);
module.exports = router;
