const mongoose = require('mongoose');
const UserSchema = require('../db/userSchema');
const Notification = require('../models/Notification');
const User = require('../models/User');
const UserModel = mongoose.model('UserModel', UserSchema);


module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const user = new User(requestBody.telegramId);
    const notification = new Notification(requestBody.telegramId);
    for (let i = 0; i < requestBody.sport.length; i += 1) {
      notification.appendSport(requestBody.sport[i]);
    }

    for (let i = 0; i < requestBody.days.length; i += 1) {
      notification.appendDay(requestBody.days[i]);
    }

    for (let i = 0; i < requestBody.hours.length; i += 1) {
      notification.appendHour(requestBody.hours[i]);
    }

    for (let i = 0; i < requestBody.local.length; i += 1) {
      notification.appendLocal(requestBody.local[i]);
    }


    user.findMe().then((isFound) => {
      user.appendNotification(notification);
      if (isFound) {
        UserModel.update({ telegramId: requestBody.telegramId }, user).then(() => {
          resolve(user);
        }).catch((err) => {
          console.log('Update error:')
          console.log(err);
        })
      } else {
        user.saveUser().then(() => resolve(user));
      }
    });

  }),
};
