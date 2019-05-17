const express = require('express');
const saveNotification = require('./utils/saveNotification');
const mongooseConnection = require('./config/mongooseConnection');
const endpoints = require('./utils/endpoints');

const router = express.Router();

mongooseConnection.connect();

router.get('/', (req, res) => {
  res.json(endpoints.getJson());
});

router.post('/createNotification', (req, res) => {
  saveNotification.saveNotification(req.body).then((notification) => {
    res.send(notification);
  });
});

module.exports = app => app.use('/', router);
