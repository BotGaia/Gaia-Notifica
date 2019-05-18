const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  class: String,
  telegramId: String,
  notifications: Array,
});

module.exports = UserSchema;
