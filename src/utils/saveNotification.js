const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');
const UserModel = mongoose.model('UserModel', UserSchema);
const Notification = require('../models/Notification');
const User = require('../models/User');


module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const user = new User(requestBody.telegramId);
    const notification = new Notification(requestBody.telegramId);

    for (let i = 0; i < requestBody.sport.lenght; i += 1) {
      notification.appendDay(requestBody.sport[i]);
    }

    for (let i = 0; i < requestBody.days.lenght; i += 1) {
      notification.appendDay(requestBody.days[i]);
    }

    for (let i = 0; i < requestBody.hours.lenght; i += 1) {
      notification.appendDay(requestBody.hours[i]);
    }

    for (let i = 0; i < requestBody.local.lenght; i += 1) {
      notification.appendDay(requestBody.local[i]);
    }


    user.findMe().then((isFound) => {
      user.appendNotification(Notification);
      if (isFound) {
        UserModel.update(requestBody.telegramId, user).then(() => resolve(user));
      } else {
        user.saveUser().then(() => resolve(user));
      }
    });
  }),
};
