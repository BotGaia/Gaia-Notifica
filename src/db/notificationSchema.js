const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  class: String,
  telegramId: String,
  sport: String,
  days: Array,
  hours: Number,
  minutes: Number,
  locals: Array,
});

module.exports = NotificationSchema;
