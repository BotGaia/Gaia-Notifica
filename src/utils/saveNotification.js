const Notification = require('../models/Notification');
const timeMath = require('./timeMath');

module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const notification = new Notification(requestBody.telegramId);
    if (requestBody.minutesBefore || requestBody.hoursBefore) {
      const { hours: userHours } = requestBody;
      const { minutes: userMinutes } = requestBody;
      const { minutesBefore: minBefore } = requestBody;
      const { hoursBefore: hourBefore } = requestBody;
      const targetTime = timeMath.getTargetTime(userHours, userMinutes, minBefore, hourBefore);
      notification.setTime(targetTime[0], targetTime[1]);
    } else {
      notification.setTime(requestBody.hours, requestBody.minutes);
    }

    notification.setSport(requestBody.sport);

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
