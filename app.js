const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use(routes);

app.use('/', express.static('views'));

app.listen(port, () => {
  console.log(`Your apps running on http://localhost:${port}`);
});
