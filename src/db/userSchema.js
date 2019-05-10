const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  class: String,
  telegramId: String,
  notification: Array,
});

module.exports = UserSchema;
