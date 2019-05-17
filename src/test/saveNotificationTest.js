/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const SaveNotification = require('../utils/saveNotification');

const mockJson = {
  telegramId: 'testId38',
  sport: 'testSport',
  days: [8],
  hours: 12,
  minutes: 30,
  locals: ['Fabrica do Papai Noel'],
};

describe('Save notification', () => {
  it('Save notification', (done) => {
    SaveNotification.saveNotification(mockJson).then((notification) => {
      notification.getTelegramId().should.eql('testId38');
      notification.getSport().should.eql('testSport');
      done();
    });
  }).timeout(5000);
});
