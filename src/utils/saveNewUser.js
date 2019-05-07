module.exports = {

  saveNewUser: (jsonAnswer, user) => new Promise((resolve) => {
    user.findMe().then((isFound) => {
      if (isFound) {
        resolve(user);
      } else {
        user.setTelegramId(jsonAnswer.telegramId);
        user.setSport(jsonAnswer.sport);
        user.setLocal(jsonAnswer.local);
        user.setNotificationDays(jsonAnswer.notificationDays);
        user.setNotificationTime(jsonAnswer.notificationTime);
        user.saveUser();
        resolve(user);
      }
    });
  }),
};
