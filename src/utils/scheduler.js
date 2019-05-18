const schedule = require('node-schedule');
const mongoose = require('mongoose');
const axios = require('axios');
const NotificationSchema = require('../db/notificationSchema');
const TreatTime = require('./treatTime');

const NotificationModel = mongoose.model('NotificationModel', NotificationSchema);

function getDailyNotifications(weekDay) {
  const dailyArray = new Array([]);
  return new Promise((resolve) => {
    NotificationModel.find({ class: 'notification' }).then((notificationArray) => {
      for (let i = 0; i < notificationArray.length; i += 1) {
        for (let k = 0; k < notificationArray[i].days.length; k += 1) {
          if (notificationArray[i].days[k] === weekDay) {
            dailyArray.push(notificationArray[i]);
          }
        }
      }
      resolve(dailyArray);
    });
  });
}

function postNotification(notification) {
  return new Promise((resolve) => {
    let postUrl = '';
    if (process.env.ENVIRONMENT === 'dev') {
      postUrl = `http://${process.env.IP_ADDRESS}:3002/notify`;
    } else if (process.env.ENVIRONMENT === 'homolog') {
      postUrl = 'https://notifica.hml.botgaia.ga/notify';
    }

    axios.post(postUrl, notification).then((res) => {
      resolve(res.body);
    });
  });
}

async function makeSchedule(notification) {
  if (notification.minutesBefore || notification.hoursBefore) {
    schedule.scheduleJob(`${(notification.minutesBefore).toString()} ${(notification.hoursBefore + 3).toString()} * * *`, () => {
      postNotification(JSON.stringify(notification));
    });
  } else if (notification.minutes) {
    schedule.scheduleJob(`${(notification.minutes).toString()} ${(notification.hours + 3).toString()} * * *`, () => {
      postNotification(JSON.stringify(notification));
    });
  }
}

function notificationSchedule() {
  const weekDay = TreatTime.getDateTime();
  getDailyNotifications(weekDay).then((dailyArray) => {
    for (let i = 0; i < dailyArray.length; i += 1) {
      makeSchedule(dailyArray[i]);
    }
  });
}

function dailySchedule() {
  schedule.scheduleJob('0 0 3 * * *', () => {
    notificationSchedule();
  });
}

module.exports = {
  dailySchedule,
  postNotification,
  makeSchedule,
  getDailyNotifications,
  notificationSchedule,
};
