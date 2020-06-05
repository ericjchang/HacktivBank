const routes = require('express').Router();
const Controller = require('../controllers/bank');

routes.get('/', Controller.index);

module.exports = routes;
