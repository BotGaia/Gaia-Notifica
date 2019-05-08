module.exports = class Notification {
    constructor(telegramId) {
        this.telegramId = telegramId;
        this.sport = [];
        this.notificationDays = [];
        this.notificationTime = [];
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

    setNotificationDays(notificationDays) {
        this.notificationDays.push(notificationDays);
    }

    getNotificationDays(index) {
        return this.notificationDays[index];
    }

    setNotificationTime(notificationTime) {
        this.notificationTime.push(notificationTime);
    }

    getNotificationTime(index) {
        return this.notificationTime[index];
    }

    setLocal(local) {
        this.local.push(local);
    }

    getLocal(index) {
        return this.local[index];
    }
};