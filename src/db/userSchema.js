const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: String,
  sport: String,
  notificationDays: Array,
  notificationTime: Array,
  local: String,
});

module.exports = UserSchema;
