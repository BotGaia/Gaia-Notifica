const schedule = require('node-schedule');
const mongoose = require('mongoose');
const axios = require('axios');
const UserSchema = require('../db/userSchema');
const TreatTime = require('./treatTime');

const UserModel = mongoose.model('UserModel', UserSchema);

function getDailyNotifications(weekDay) {
  const notificationArray = new Array([]);

  return new Promise((resolve) => {
    UserModel.find({ class: 'user' }).then((userArray) => {
      for (let i = 0; i < userArray.length; i += 1) {
        for (let j = 0; j < userArray[i].notifications.length; j += 1) {
          for (let k = 0; k < userArray[i].notifications[j].days.length; k += 1) {
            if (userArray[i].notifications[j].days[k] === weekDay) {
              notificationArray.push(userArray[i].notifications[j]);
            }
          }
        }
      }
      resolve(notificationArray);
    });
  });
}

function postNotification(notification) {
  return new Promise((resolve) => {
    axios.post('http://68.183.43.29:30000/notify', notification).then((res) => {
      resolve(res.body);
    });
  });
}

async function makeSchedule(notification) {
  if (notification.minutes) {
    schedule.scheduleJob(`${(notification.minutes).toString()} ${(notification.hours + 3).toString()} * * *`, () => {
      postNotification(notification);
    });
  }
}

function notificationSchedule() {
  const weekDay = TreatTime.getDateTime();
  getDailyNotifications(weekDay).then((notificationArray) => {
    for (let i = 0; i < notificationArray.length; i += 1) {
      makeSchedule(notificationArray[i]);
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
