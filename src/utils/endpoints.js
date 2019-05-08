module.exports = {
  getJson: () => {
    const endpoints = [
      {
        type: 'POST',
        endpoint: '/userRegister',
        parameters: [
          {
            type: 'JSON',
          },
        ],
      },
    ];

    return endpoints;
  },
};
