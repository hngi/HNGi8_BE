const express = require('express');

const { homePage, login, intern, mentors } = require('../../controller/views/index');
const { mentor } = require('../../controller/views');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

viewRouter.get('/mentor', mentor);

module.exports = viewRouter;
