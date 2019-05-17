const mongoose = require('mongoose');
const NotificationSchema = require('../db/notificationSchema');

const NotificationModel = mongoose.model('NotificationModel', NotificationSchema);

module.exports = class Notification {
  constructor(telegramId) {
    this.notification = new NotificationModel({
      class: 'notification',
      telegramId,
      sport: '',
      days: [],
      hours: 0,
      minutes: 0,
      locals: [],
    });
  }

  setTelegramId(telegramId) {
    this.notification.telegramId = telegramId;
  }

  getTelegramId() {
    return this.notification.telegramId;
  }

  setSport(sport) {
    this.notification.sport = sport;
  }

  getSport() {
    return this.notification.sport;
  }

  setDay(days) {
    this.notification.days = days;
  }

  getDay(index) {
    return this.notification.days[index];
  }

  getDays() {
    return this.notification.days;
  }

  appendDay(day) {
    this.notification.days.push(day);
  }

  setTime(hours, minutes) {
    this.notification.hours = hours;
    this.notification.minutes = minutes;
  }

  getHours() {
    return this.notification.hours;
  }

  getMinutes() {
    return this.notification.minutes;
  }

  appendLocal(local) {
    this.notification.locals.push(local);
  }

  getLocal(index) {
    return this.notification.locals[index];
  }

  saveNotification() {
    return new Promise((resolve) => {
      this.notification.save().then(() => {
        resolve();
      });
    });
  }

  findMe() {
    return new Promise((resolve) => {
      NotificationModel.findOne({ telegramId: this.notification.telegramId },
        (err) => { if (err) { resolve(false); } }).then((notification) => {
        if (notification) {
          this.notification = notification;
          resolve(true);
        }
        resolve(false);
      });
    });
  }
};
