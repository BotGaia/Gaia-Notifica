const Notification = require('../models/Notification');
const User = require('../models/User');

module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const user = new User(requestBody.telegramId);
    const notification = new Notification(requestBody.telegramId);

    notification.setSport(requestBody.sport);
    notification.setTime((new Date()).setHours(requestBody.hours, requestBody.minutes, 0));

    requestBody.days.forEach((i) => {
      notification.appendDay(requestBody.days[i]);
    });

    requestBody.locals.forEach((i) => {
      notification.appendLocal(requestBody.locals[i]);
    });

    user.findMe().then(() => {
      user.appendNotification(notification);
      user.saveUser().then(() => resolve(user));
    });
  }),
};
