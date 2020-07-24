const express = require('express');

const { homePage } = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

module.exports = viewRouter;
