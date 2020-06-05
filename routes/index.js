const routes = require('express').Router();
const userRoute = require('./user');
const bankRoute = require('./bank');
const bankUserRoute = require('./bankuser');

routes.get('/', (req, res) => {
  res.redirect('/user');
});

routes.use('/user', userRoute);
routes.use('/bank', bankRoute);
routes.use('/book', bankUserRoute);

module.exports = routes;
