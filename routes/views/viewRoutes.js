const express = require('express');

const { homePage, login, intern, mentor } = require('../../controller/views/index');

const { mentor } = require('../../controller/views');

const viewRouter = express.Router();

viewRouter.get('/', homePage);

viewRouter.get('/login', login);

viewRouter.get('/intern', intern);

viewRouter.get('/mentor', mentor);


/// INTERN ROUTES ///

// // GET request for creating Intern. 
// router.get('/intern/create', intern_controller.intern_create_get);

// // POST request for creating Intern.
// router.post('/intern/create', intern_controller.intern_create_post);

// // GET request to delete Intern.
// router.get('/intern/:intern_id/delete', intern_controller.intern_delete_get);

// // POST request to delete Intern
// router.post('/intern/:intern_id/delete', intern_controller.intern_delete_post);

// // GET request to update Intern.
// router.get('/intern/:intern_id/update', intern_controller.intern_update_get);

// // POST request to update Intern.
// router.post('/intern/:intern_id/update', intern_controller.intern_update_post);

// // GET request for one Intern.
// router.get('/intern/:intern_id', intern_controller.intern_detail);

// // GET request for list of all Employees.
// router.get('/interns', intern_controller.intern_list);


module.exports = viewRouter;
