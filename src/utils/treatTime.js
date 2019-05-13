module.exports = {

    getDateTime: () => {
        const today = new Date();
        let time = today.getHours() - 3;
        let weekDay = today.getDay();
        if (time <= 0) {
            if (time === -1) {
                time = 23;
                this.date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
                weekDay -= 1;
            } else if (time === -2) {
                time = 22;
                this.date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
                weekDay -= 1;
            } else if (time === -3) {
                time = 21;
                this.date = `${today.getDate() - 1}/${today.getMonth() + 1}/${today.getFullYear()}`;
                weekDay -= 1;
            }
        }

        return (weekDay);
    }
}

