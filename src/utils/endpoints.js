module.exports = {
  getJson: () => {
    const endpoints = [
      {
        type: 'POST',
        endpoint: '/userRegister',
        JSON: {
          telegramId: 'String',
          sport: 'String',
          notificationDays: 'Array',
          notificationTime: 'Array',
          local: 'String',
        },
        description: 'Receives the user information in JSON format and saves its preferences',
      },
      {
        type: 'POST',
        endpoint: '/createNotification',
        JSON: {
          telegramId: 'String',
          sports: 'Array',
          days: 'Array',
          hours: 'Integer',
          minutes: 'Integer',
          locals: 'Array',
        },
        description: 'Saves a notification in the system',
      },
    ];
    return endpoints;
  },
};
