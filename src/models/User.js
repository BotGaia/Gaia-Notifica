const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = class User {
  constructor(id) {
    this.user = new UserModel({
      id,
      sport: '',
      notificationDays: '',
      notificationTime: '',
      local: '',
    });
  }

  setId(id) {
      this.id = id;
  }

  setSport(sport) {
      this.sport = sport;
  }

  setNotificationDays(notificationDays) {
      this.notificationDays = notificationDays;
  }

  setNotificationTime(notificationTime) {
      this.notificationTime = notificationTime;
  }

  setLocal(local) {
      this.local = local;
  }

  findMe() {
    return new Promise((resolve) => {
      UserModel.findOne({ name: this.user.id },
        (err) => { if (err) { resolve(false); } }).then((user) => {
        if (user) {
          this.user = user;
          resolve(true);
        }
        resolve(false);
      });
    });
  }

  saveUser() {
    return new Promise((resolve) => {
      this.user.save().then(() => {
        resolve();
      });
    });
  }

} 