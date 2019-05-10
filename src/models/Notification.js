module.exports = class Notification {
  constructor(telegramId) {
    this.telegramId = telegramId;
    this.sports = [];
    this.days = [];
    this.times = [];
    this.locals = [];
  }


  setTelegramId(telegramId) {
    this.telegramId = telegramId;
  }

  getTelegramId() {
    return this.telegramId;
  }

  appendSport(sport) {
    this.sports.push(sport);
  }

  getSport(index) {
    return this.sports[index];
  }

  appendDay(day) {
    this.days.push(day);
  }

  getDay(index) {
    return this.days[index];
  }

  appendTime(time) {
    this.times.push(time);
  }

  getTimes(index) {
    return this.times[index];
  }

  appendLocal(local) {
    this.locals.push(local);
  }

  getLocal(index) {
    return this.locals[index];
  }
};
