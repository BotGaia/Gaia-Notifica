module.exports = class Notification {
  constructor(telegramId) {
    this.telegramId = telegramId;
    this.sport = '';
    this.days = [];
    this.hours = '';
    this.minutes = '';
    this.locals = [];
  }

  setTelegramId(telegramId) {
    this.telegramId = telegramId;
  }

  getTelegramId() {
    return this.telegramId;
  }

  setSport(sport) {
    this.sport = sport;
  }

  getSport() {
    return this.sport;
  }

  appendDay(day) {
    this.days.push(day);
  }

  getDay(index) {
    return this.days[index];
  }

  setTime(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  getHours() {
    return this.hours;
  }

  getMinutes() {
    return this.minutes;
  }

  appendLocal(local) {
    this.locals.push(local);
  }

  getLocal(index) {
    return this.locals[index];
  }
};
