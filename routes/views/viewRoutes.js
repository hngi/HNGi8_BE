const express = require('express');

const { homePage, login, intern } = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

module.exports = viewRouter;
