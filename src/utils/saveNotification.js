const Notification = require('../models/Notification');

module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const notification = new Notification(requestBody.telegramId);
    notification.setSport(requestBody.sport);
    notification.setTime(requestBody.hours, requestBody.minutes);

    requestBody.days.forEach((element) => {
      notification.appendDay(element);
    });

    requestBody.locals.forEach((element) => {
      notification.appendLocal(element);
    });

    notification.findMe().then(() => {
      notification.saveNotification().then(() => resolve(notification));
    });
  }),
};
