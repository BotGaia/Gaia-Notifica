const express = require('express');
const newUser = require('./utils/saveNewUser');
const User = require('../src/models/User');
const mongooseConnection = require('./config/mongooseConnection');

const router = express.Router();

mongooseConnection.connect();

router.post('/registerUser', (req, res) => {
  const user = new User(req.body.telegramId);
  newUser.saveNewUser(req.body, user);
  user.findMe().then(() => {
    res.send(user);
  });
});

module.exports = app => app.use('/', router);
