const express = require('express');
const User = require('../src/models/User');

const router = express.Router();

router.post('/registerUser', (req, res) => {
  const user = new User(req.body.id);
  user.setId(req.body.id);
  user.setSport(req.body.sport);
  user.setLocal(req.body.local);
  user.setNotificationDays(req.body.notificationDays);
  user.setNotificationTime(req.body.notificationTime);

});

module.exports = app => app.use('/', router);