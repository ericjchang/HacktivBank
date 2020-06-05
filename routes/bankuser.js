const routes = require('express').Router();
const Controller = require('../controllers/bankuser');

routes.get('/', Controller.index);

routes.get('/list', Controller.list);

routes.get('/:id', Controller.bookGet);
routes.post('/:id', Controller.bookPost);

module.exports = routes;
