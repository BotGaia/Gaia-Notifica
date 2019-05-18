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
      hoursBefore: 0,
      minutesBefore: 0,
      day: 0,
      month: 0,
      year: 0,
    });
  }

  setTelegramId(telegramId) {
    this.notification.telegramId = telegramId;
  }

  getTelegramId() {
    return this.notification.telegramId;
  }

  setHoursBefore(hoursBefore) {
    this.notification.hoursBefore = hoursBefore;
  }

  getHoursBefore() {
    return this.notification.hoursBefore;
  }

  setDay(day) {
    this.notification.day = day;
  }

  getDay() {
    return this.notification.day;
  }

  setMonth(month) {
    this.notification.month = month;
  }

  getMonth() {
    return this.notification.month;
  }

  setYear(year) {
    this.notification.year = year;
  }

  getYear() {
    return this.notification.year;
  }

  setMinutesBefore(minutesBefore) {
    this.notification.minutesBefore = minutesBefore;
  }

  getMinutesBefore() {
    return this.notification.minutesBefore;
  }

  setSport(sport) {
    this.notification.sport = sport;
  }

  getSport() {
    return this.notification.sport;
  }

  setDays(days) {
    this.notification.days = days;
  }

  getDays(index) {
    return this.notification.days[index];
  }

  getDaysArray() {
    return this.notification.days;
  }

  appendDay(weekday) {
    this.notification.days.push(weekday);
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
