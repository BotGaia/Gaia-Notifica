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
        description: 'Recebe as informações de um user em formato JSON e salva suas preferências',
      },
    ];

    return endpoints;
  },
};
