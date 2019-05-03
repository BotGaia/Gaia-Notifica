module.exports = {

  saveNewUser: (jsonAnswer, user) => {
    try {
      return new Promise((resolve) => {
        console.log("ta passando na promessa");
        user.findMe().then((isFound) => {
          if (isFound) {
            console.log("ta salvo no banco hahahaha");
            resolve(user);
          } else {
            console.log("nao ta salvo no banco");
            user.setId(jsonAnswer.id);
            user.setSport(jsonAnswer.sport);
            user.setLocal(jsonAnswer.local);
            user.setNotificationDays(jsonAnswer.notificationDays);
            user.setNotificationTime(jsonAnswer.notificationTime);
            user.saveUser();
            resolve(user);
          }
          console.log("olaaaaaaa");
        });
      });
    }
    catch {
      console.log("deu ruim ");
      res.send("-------------------deu ruim =( -------------------");
    }


  }




}