const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: String,
  sport: String,
  notificationDays: String,
  notificationTime: String,
  local: String,
});
module.exports = UserSchema;
