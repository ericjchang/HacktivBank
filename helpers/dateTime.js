const moment = require('moment');

function dateTime(time) {
  return moment().add(1, 'days').set('hour', time).set('minute', 0).set('second', 0);
}

module.exports = dateTime;
