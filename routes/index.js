const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeController);
routes.get('/about', lesson1Controller.aboutController);
routes.get('/contact', lesson1Controller.contactController);

module.exports = routes;
