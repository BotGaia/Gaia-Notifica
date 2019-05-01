const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  sport: String,
  notificationDays: String,
  notificationTime: String,
  local : String
});
module.exports = UserSchema;
