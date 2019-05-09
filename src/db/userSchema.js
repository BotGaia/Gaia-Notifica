const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: String,
  notification: Array,
});

module.exports = UserSchema;
