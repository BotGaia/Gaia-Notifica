module.exports = {

  saveNewUser: (jsonAnswer, user) => {
    try {
      return new Promise((resolve) => {
        user.findMe().then((isFound) => {
          if (isFound) {
            console.log('Tá salvo no banco');
            resolve(user);
          } else {
            console.log("nao ta salvo no banco");
            user.setTelegramId(jsonAnswer.telegramId);
            user.setSport(jsonAnswer.sport);
            user.setLocal(jsonAnswer.local);
            user.setNotificationDays(jsonAnswer.notificationDays);
            user.setNotificationTime(jsonAnswer.notificationTime);
            user.saveUser();
            resolve(user);
          }
        });
      });
    }
    catch(err){
      res.send("-------------------deu ruim =( -------------------");
    }
  }
}