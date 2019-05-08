const express = require('express');
const date = require('../src/utils/scheduleFunction');

const router = express.Router();

router.get('/dateTime', (req, res) => {
  res.send(date.scheduleFunction());
});
module.exports = app => app.use('/', router);
