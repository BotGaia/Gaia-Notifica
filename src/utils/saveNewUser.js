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

  saveNewNotification: (requestBody) => new Promise((resolve) => {
    const user = new user(requestBody.telegramId);

    user.findMe().then((isFound) => {
      if (isFound) {        
        user.setNotification(addNotification(requestBody));
      } else {
        user.setTelegramId(requestBody.telegramId);
        user.setNotification(addNotification(requestBody));
      }
    });
  }),

  addNotification: (requestBody) => new Promisse((resolve) => { 
    let i;
    const notification = new Notification();

    notification.setTelegramId(requestBody.telegramId);

    for (i = 0; i < requestBody.notificationDays.sizeof(); i += 1) {
      notification.setDays(resquestBody.notificationDays[i]);
    }
    for (i = 0; i < requestBody.notificationTime.sizeof(); i += 1) {
      notification.setHours(requestBody.notificationTime[i]);
    }
    for (i = 0; i < requestBody.local.sizeof(); i += 1) {
      notification.setLocal(requestBody.local);
    }
    resolve(notification);
  }),
};
