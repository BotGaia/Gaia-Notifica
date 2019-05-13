/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const SaveNotification = require('../utils/saveNotification');

const mockJson = {
  telegramId: 'testId38',
  sport: 'testSport',
  days: [8],
  time: (new Date()).setHours(0, 0, 0),
  locals: ['Fabrica do Papai Noel'],
};

describe('Save notification', () => {
  it('Save notification', (done) => {
    SaveNotification.saveNotification(mockJson).then((user) => {
      user.getNotification(0).telegramId.should.eql('testId38');
      user.getNotification(0).sport.should.eql('testSport');
      done();
    });
  });
});
