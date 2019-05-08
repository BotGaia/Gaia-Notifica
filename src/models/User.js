const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = class User {
  constructor(telegramId) {
    this.user = new UserModel({
      telegramId,
      sport: [],
      notificationDays: [],
      notificationTime: [],
      local: [],
    });
  }

  setTelegramId(telegramId) {
    this.user.telegramId = telegramId;
  }

  getTelegramId() {
    return this.user.telegramId;
  }

  setSport(sport) {
    this.user.sport.push(sport);
  }

  getSport(index) {
    return this.user.sport[index];
  }

  setNotificationDays(notificationDays) {
    this.user.notificationDays.push(notificationDays);
  }

  getNotificationDays(index) {
    return this.user.notificationDays[index];
  }

  setNotificationTime(notificationTime) {
    this.user.notificationTime.push(notificationTime);
  }

  getNotificationTime(index) {
    return this.user.notificationTime[index];
  }

  setLocal(local) {
    this.user.local.push(local);
  }

  getLocal(index) {
    return this.user.local[index];
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
