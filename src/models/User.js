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
} 