const express = require('express');

const { homePage, login, intern, mentors } = require('../../controller/views/index');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

viewRouter.get('/mentors', mentors);

module.exports = viewRouter;
