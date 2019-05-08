module.exports = {
  getJson: () => {
    const endpoints = [
      {
        type: 'POST',
        endpoint: '/userRegister',
        JSON: {
          telegramId: 'String',
          sport: 'Array',
          notificationDays: 'Array',
          notificationTime: 'Array',
          local: 'Array',
        },
        description: 'Recebe as informações de um user em formato JSON e salva suas preferências',
      },
    ];

    return endpoints;
  },
};
