const routes = require('express').Router();
const userRoute = require('./user');

routes.get('/', (req, res) => {
  res.redirect('/user');
});

routes.use('/user', userRoute);

module.exports = routes;
