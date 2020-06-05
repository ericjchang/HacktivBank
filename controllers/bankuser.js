const { Bank, BankUser } = require('../models');
const dateYesterday = require('../helpers/dateYesterday');
const dateTime = require('../helpers/dateTime');

class BankUserController {
  static index(req, res) {}
  static bookGet(req, res) {
    const id = +req.params.id;
    let bank;

    Bank.findAll({
      where: { id: id },
    })
      .then((result) => {
        bank = result;
        return BankUser.findAll({});
      })
      .then((appointment) => {
        res.render('book', { id, bank, appointment, dateYesterday, dateTime });
      })
      .catch((err) => {});
  }
  static bookPost(req, res) {
    const id = +req.params.id;

    const data = {
      UserId: req.session.userId,
      BankId: id,
      appointment_time: req.body.date,
    };

    BankUser.create(data)
      .then((result) => {
        res.redirect('/bank');
      })
      .catch((err) => {
        res.send('err');
        console.log(err);
      });
  }

  static list(req, res) {
    const id = +req.session.userId;

    BankUser.findAll({
      include: {
        model: Bank,
      },
      where: { UserId: id },
    })
      .then((result) => {
        // res.send(result);
        res.render('list-book', { data: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = BankUserController;
