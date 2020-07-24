const express = require('express');

const { homePage, login } = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

module.exports = viewRouter;
