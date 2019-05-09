module.exports = class Notification {
  constructor(telegramId) {
    this.telegramId = telegramId;
    this.sport = [];
    this.days = [];
    this.hours = [];
    this.local = [];
  }


  setTelegramId(telegramId) {
    this.telegramId = telegramId;
  }

  getTelegramId() {
    return this.telegramId;
  }

  setSport(sport) {
    this.sport.push(sport);
  }

  getSport(index) {
    return this.sport[index];
  }

  setDays(days) {
    this.days.push(days);
  }

  getDays(index) {
    return this.days[index];
  }

  setHours(hours) {
    this.hours.push(hours);
  }

  getHours(index) {
    return this.hours[index];
  }

  setLocal(local) {
    this.local.push(local);
  }

  getLocal(index) {
    return this.local[index];
  }
};
