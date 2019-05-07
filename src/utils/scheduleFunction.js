module.exports = {
    scheduleFunction: () => {
        const today = new Date();
        const date =   today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        const hours = (today.getHours() - 3) + ':' + today.getMinutes() + ':' + today.getSeconds();
        var dateTime = date.toString() + ' ' + hours.toString();
        return (dateTime);
    }
};