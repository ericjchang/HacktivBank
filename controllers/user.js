const { User } = require('../models');
const bcrypt = require('bcrypt');

class UserController {
  static index(req, res) {
    res.render('index');
  }

  static loginPost(req, res) {
    User.findOne({
      where: { username: req.body.username },
    })
      .then((data) => {
        if (!data) {
          res.send('Username is not found!');
        } else {
          if (bcrypt.compareSync(req.body.password, data.password)) {
            req.session.userId = data.id;
            req.session.username = req.body.username;
            res.redirect('/bank');
          } else {
            res.send("Username and Password doesn't match!");
          }
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static registerGet(req, res) {
    res.render('register');
  }

  static registerPost(req, res) {
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    User.create(data)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) res.send(err);
      else res.redirect('/');
    });
  }
}

module.exports = UserController;
