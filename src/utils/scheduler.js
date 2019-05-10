const schedule = require('node-schedule');
const mongoose = require('mongoose');
const axios = require('axios');
const UserSchema = require('../db/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
  getDateTime: () => {
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
  },

  dailySchedule: () => {
    schedule.scheduleJob('0 0 0 * * *', () => {
      notificationSchedule();
    });
  },

  notificationSchedule: () => {
    const weekDay = getDateTime();
    const notificationArray = getDailyNotifications(weekDay);

    for (let i = 0; i < notificationArray.length; i += 1) {
      makeSchedule(notificationArray[i]);
    }
  },

  getDailyNotifications: (weekDay) => {
    const notificationArray = new Array();

    return new Promise(() => {
      UserModel.find({ class: 'user' }).then((userArray) => {
        for (let i = 0; i < userArray.length; i += 1) {
          for (let j = 0; j < userArray[i].notification.length; j += 1) {
            for (let k = 0; k < userArray[i].notification[j].days.length; k += 1) {
              if (userArray[i].notification[j].days[k] == weekDay) {
                notificationArray.push(userArray[i].notification[j]);
              }
            }
          }
        }
        resolve(notificationArray);
      });
    });
  },

  makeSchedule: async (notification) => {

    for (let i = 0; i < notification.hours.length; i += 1) {
      schedule.scheduleJob(`* * ${notification.hours[i]} * * *`, () => {

        return;
      });

    }
  },
  postNotification: (notification) => {
    return new Promise((resolve) => {
      axios.post('http://68.183.43.29:30000/notify', notification).then((res) => {
        resolve(res.body);
      })
    })
  },
};