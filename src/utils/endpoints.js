module.exports = {
  getJson: () => {
    const endpoints = [
      {
        type: 'POST',
        endpoint: '/createNotification',
        JSON: {
          telegramId: 'String',
          sport: 'String',
          days: 'Array',
          hour: 'Integer',
          minutes: 'Integer',
          locals: 'Array',
        },
        description: 'Saves a notification in the system',
      },
    ];
    return endpoints;
  },
};
