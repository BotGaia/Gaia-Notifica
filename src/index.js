const express = require('express');
const bodyParser = require('body-parser');
const scheduler = require('./utils/scheduler');
const environment = require('./config/environment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

environment.configClimate();

require('./routes')(app);

scheduler.dailySchedule();

app.listen(3003);

module.exports = app;
