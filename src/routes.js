const express = require('express');
const User = require('../src/models/User');

const router = express.Router();

router.post('/registerUser', (req, res) => {
  const user = new User(req.body.id);
  try{
  return new Promise((resolve) => {
    console.log("ta passando na promessa");
    user.findMe().then((isFound) => {
      if (isFound) {
        console.log("ta salvo no banco hahahaha");
        resolve(user);
      } else {
        console.log("nao ta salvo no banco");
        user.setId(req.body.id);
        user.setSport(req.body.sport);
        user.setLocal(req.body.local);
        user.setNotificationDays(req.body.notificationDays);
        user.setNotificationTime(req.body.notificationTime);
        user.saveUser();
        resolve(user);
      }
      console.log("olaaaaaaa");
      res.send(user);
    });
  });
 } 
  catch {
    console.log("deu ruim ");
    res.send("-------------------deu ruim =( -------------------");
  }
});
module.exports = app => app.use('/', router);