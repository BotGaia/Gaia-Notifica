const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = class User {
  constructor(telegramId) {
    this.user = new UserModel({
      class: 'user',
      telegramId,
      notifications: [],
    });
  }

  setTelegramId(telegramId) {
    this.user.telegramId = telegramId;
  }

  getTelegramId() {
    return this.user.telegramId;
  }

  setNotification(notifications) {
    this.user.notifications = notifications;
  }

  getNotification() {
    return this.user.notifications;
  }

  appendNotification(notification) {
    this.user.notifications.push(notification);
  }

  saveUser() {
    return new Promise((resolve) => {
      this.user.save().then(() => {
        resolve();
      });
    });
  }

  findMe() {
    return new Promise((resolve) => {
      UserModel.findOne({ telegramId: this.user.telegramId },
        (err) => { if (err) { resolve(false); } }).then((user) => {
        if (user) {
          this.user = user;
          resolve(true);
        }
        resolve(false);
      });
    });
  }
};
