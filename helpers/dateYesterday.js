const moment = require('moment');

function dateYesterday() {
  return moment().add(1, 'days').format('ddd Do MMMM YYYY');
}

module.exports = dateYesterday;
