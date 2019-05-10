const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');
const Notification = require('../models/Notification');
const User = require('../models/User');
const UserModel = mongoose.model('UserModel', UserSchema);


module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const user = new User(requestBody.telegramId);
    const notification = new Notification(requestBody.telegramId);
    for (let i = 0; i < requestBody.sports.length; i += 1) {
      notification.appendSport(requestBody.sports[i]);
    }

    for (let i = 0; i < requestBody.days.length; i += 1) {
      notification.appendDay(requestBody.days[i]);
    }

    for (let i = 0; i < requestBody.times.length; i += 1) {
      notification.appendTime(requestBody.times[i]);
    }

    for (let i = 0; i < requestBody.locals.length; i += 1) {
      notification.appendLocal(requestBody.locals[i]);
    }
    
    user.findMe().then(() => {
      user.appendNotification(notification);
      user.saveUser().then(() => resolve(user));
    });

  }),
};
