const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: String,
  sport: Array,
  notificationDays: Array,
  notificationTime: Array,
  local: Array,
});

module.exports = UserSchema;
