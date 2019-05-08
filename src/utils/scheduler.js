module.exports = {
  scheduleFunction: () => {
    const today = new Date();
    let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    let time = today.getHours() - 3;

    if (time <= 0) {
      if (time == -1) {
        time = 23;
      } else if (time == -2) {
        time = 22;
      } else if (time == -3) {
        time = 21;
        date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
      }
    }

    const hours = `${time.toString()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date.toString()} ${hours.toString()}`;
    return (dateTime);
  },
};
