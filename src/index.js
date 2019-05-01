const express = require('express');
const bodyParser = require('body-parser');
const mongooseConnection = require('./config/mongooseConnection');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongooseConnection.connect();

app.get('/', (req, res) => {
  res.json({ Hello: 'World' });
});

require('./routes')(app);

app.listen(3003);

module.exports = app;
