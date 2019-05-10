const schedule = require('node-schedule');
const mongoose = require('mongoose');
const axios = require('axios');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);


function notificationSchedule() {
  const weekDay = getDateTime();
  getDailyNotifications(weekDay).then((notificationArray) => {
    for (let i = 0; i < notificationArray.length; i += 1) {
      makeSchedule(notificationArray[i]);
    }
  });
}

function getDateTime() {
  const today = new Date();
  let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  let time = today.getHours() - 3;
  let weekDay = today.getDay();
  if (time <= 0) {
    if (time == -1) {
      time = 23;
      date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
      weekDay -= 1;
    } else if (time == -2) {
      time = 22;
      date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
      weekDay -= 1;
    } else if (time == -3) {
      time = 21;
      date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
      weekDay -= 1;
    }
  }

  const hours = `${time.toString()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date.toString()} ${hours.toString()}`;
  // return (dateTime);
  return (weekDay)
}

function getDailyNotifications(weekDay) {
  const notificationArray = new Array();

  return new Promise((resolve) => {
    UserModel.find({ class: 'user' }).then((userArray) => {
      for (let i = 0; i < userArray.length; i += 1) {
        for (let j = 0; j < userArray[i].notifications.length; j += 1) {
          for (let k = 0; k < userArray[i].notifications[j].days.length; k += 1) {
            if (userArray[i].notifications[j].days[k] == weekDay) {
              notificationArray.push(userArray[i].notifications[j]);
            }
          }
        }
      }
      resolve(notificationArray);
    });
  });
}

async function makeSchedule(notification) {

  for (let i = 0; i < notification.times.length; i += 1) {
    schedule.scheduleJob(`${(notification.times[i].minute).toString()} ${(notification.times[i].hour + 3).toString()} * * *`, () => {
      postNotification(notification);
      return;
    });

  }
}

function postNotification(notification) {
  return new Promise((resolve) => {
    axios.post('http://localhost:3003/notify', notification).then((res) => {
      resolve(res.body);
    });
  });
}

module.exports = {

  dailySchedule: () => {
    schedule.scheduleJob('0 0 3 * * *', () => {
      notificationSchedule();
    });
  },
  
};