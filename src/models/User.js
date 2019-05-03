const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = class User {
  constructor() {
    this.user = new UserModel({
      id: '',
      sport: '',
      notificationDays: '',
      notificationTime: '',
      local: '',
    });
  }

  setId(id) {
      this.id = id;
  }

  getId() {
    return id;
  }

  setSport(sport) {
      this.sport = sport;
  }

  getSport() {
    return sport;
  }

  setNotificationDays(notificationDays) {
      this.notificationDays = notificationDays;
  }

  getNotificationDays() {
    return notificationDays;
  }

  setNotificationTime(notificationTime) {
      this.notificationTime = notificationTime;
  }

  getNotificationTime() {
    return notificationTime;
  }

  setLocal(local) {
      this.local = local;
  }

  getLocal() {
    return local;
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
      UserModel.findOne({ id: this.user.id },
        (err) => { if (err) { resolve(false); } }).then((user) => {
        if (user) {
          this.user = user;
          resolve(true);
        }
        resolve(false);
      });
    });
  }
} 