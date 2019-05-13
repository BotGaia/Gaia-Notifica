const Notification = require('../models/Notification');
const User = require('../models/User');

module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const user = new User(requestBody.telegramId);
    const notification = new Notification(requestBody.telegramId);

    notification.setSport(requestBody.sport);
    notification.setTime((new Date()).setHours(requestBody.hours, requestBody.minutes, 0));

    for (let i = 0; i < requestBody.days.length; i += 1) {
      notification.appendDay(requestBody.days[i]);
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
