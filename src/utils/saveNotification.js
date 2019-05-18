const Notification = require('../models/Notification');
const timeMath = require('./timeMath');
const TreatTime = require('./treatTime');

module.exports = {
  saveNotification: requestBody => new Promise((resolve) => {
    const notification = new Notification(requestBody.telegramId);
    const dateInfo = TreatTime.getDateInfo();
    if (requestBody.minutesBefore || requestBody.hoursBefore) {
      const { hours: userHours } = requestBody;
      const { minutes: userMinutes } = requestBody;
      const { minutesBefore: minBefore } = requestBody;
      const { hoursBefore: hourBefore } = requestBody;
      const targetTime = timeMath.getTargetTime(userHours, userMinutes, minBefore, hourBefore);
      notification.setHoursBefore(targetTime[0]);
      notification.setMinutesBefore(targetTime[1]);
    }
    notification.setTime(requestBody.hours, requestBody.minutes);
    notification.setSport(requestBody.sport);
    notification.setDay(dateInfo[0]);
    notification.setMonth(dateInfo[1]);
    notification.setYear(dateInfo[2]);

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
