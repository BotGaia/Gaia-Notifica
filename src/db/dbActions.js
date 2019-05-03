const User = require('../models/User');

module.exports = {
saveNewUser() {
    return new Promise((resolve) => {
      const user = new User();
      

      user.findMe().then((isFound) => {
        if (!isFound) {
          user.saveUser().then(() => { resolve(); });
        } else {
          resolve();
        }
      });
    });
  }
}