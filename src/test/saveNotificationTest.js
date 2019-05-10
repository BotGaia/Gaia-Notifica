/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const SaveNotification = require('../utils/saveNotification');

const mockJson = {
  telegramId: 'testId27',
  sports: ['testSport'],
  days: [8],
  times: [
    {
      hour: 30,
      minute: 70,
    },
  ],
  locals: ['Fabrica do Papai Noel'],
};

describe('Save notification', () => {
  it('Save notification', (done) => {
    SaveNotification.saveNotification(mockJson).then((user) => {
      user.getNotification(0).telegramId.should.eql('testId27');
      user.getNotification(0).sports[0].should.eql('testSport');
      done();
    });
  });
});
