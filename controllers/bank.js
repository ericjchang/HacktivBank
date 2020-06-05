const { Bank } = require('../models');

class BankController {
  static index(req, res) {
    if (!req.session.userId) res.send('You need to login first');
    else {
      Bank.findAll()
        .then((result) => {
          res.render('list', { data: result });
        })
        .catch((err) => {
          res.send(err);
        });
    }
  }
}

module.exports = BankController;
