const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const routes = require('./routes');
app.use(routes);

app.use('/', express.static('views'));
app.use('/user', express.static('views'));

app.listen(port, () => {
  console.log(`Your apps running on http://localhost:${port}`);
});
