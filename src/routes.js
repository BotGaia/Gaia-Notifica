const express = require('express');
const newUser = require('./utils/saveNewUser');
const User = require('../src/models/User');

const router = express.Router();

router.post('/registerUser', (req, res) => {
  const user = new User();
  newUser.saveNewUser(req.body, user);
  res.send(
    
  );
});
module.exports = app => app.use('/', router);