const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = class User {
  constructor(telegramId) {
    this.user = new UserModel({
      telegramId,
      sport: '',
      notificationDays: '',
      notificationTime: '',
      local: '',
    });
  }

  setTelegramId(telegramId) {
    this.user.telegramId = telegramId;
  }

  getTelegramId() {
    return this.user.telegramId;
  }

  getId() {
    return this.user.telegramId;
  }

  setSport(sport) {
    this.user.sport = sport;
  }

  getSport() {
    return this.user.sport;
  }

  setNotificationDays(notificationDays) {
    this.user.notificationDays = notificationDays;
  }

  getNotificationDays() {
    return this.user.notificationDays;
  }

  setNotificationTime(notificationTime) {
    this.user.notificationTime = notificationTime;
  }

  getNotificationTime() {
    return this.user.notificationTime;
  }

  setLocal(local) {
    this.user.local = local;
  }

  getLocal() {
    return this.user.local;
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
