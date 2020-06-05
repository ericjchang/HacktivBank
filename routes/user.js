const routes = require('express').Router();
const Controller = require('../controllers/user');

routes.get('/', Controller.index);

routes.post('/login', Controller.loginPost);

routes.get('/register', Controller.registerGet);
routes.post('/register', Controller.registerPost);

routes.get('/logout', Controller.logout);

module.exports = routes;
