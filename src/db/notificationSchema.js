const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  class: String,
  telegramId: String,
  sport: String,
  days: Array,
  hours: Number,
  minutes: Number,
  locals: Array,
  hoursBefore: Number,
  minutesBefore: Number,
  day: Number,
  month: Number,
  year: Number,
});

module.exports = NotificationSchema;
