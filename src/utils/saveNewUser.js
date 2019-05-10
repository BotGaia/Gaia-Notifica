module.exports = {
  saveNewUser: (jsonAnswer, user) => new Promise((resolve) => {
    user.findMe().then((isFound) => {
      if (isFound) {
        resolve(user);
      } else {
        user.setTelegramId(jsonAnswer.telegramId);
        user.setNotification(jsonAnswer);
        user.saveUser();
        resolve(user);
      }
    });
  }),

};
