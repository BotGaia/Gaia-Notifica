const express = require('express');
const newUser = require('./utils/saveNewUser');
const saveNotification = require('./utils/saveNotification');
const User = require('../src/models/User');
const mongooseConnection = require('./config/mongooseConnection');
const endpoints = require('./utils/endpoints');

const router = express.Router();

mongooseConnection.connect();

router.get('/', (req, res) => {
  res.json(endpoints.getJson());
});

router.post('/registerUser', (req, res) => {
  const user = new User(req.body.telegramId);
  newUser.saveNewUser(req.body, user);
  user.findMe().then(() => {
    res.send(user);
  });
});

router.post('/createNotification', (req, res) => {
  saveNotification.saveNotification(req.body).then((user) => {
    res.send(user);
  });
});

module.exports = app => app.use('/', router);
