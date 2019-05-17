/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const Notification = require('../models/Notification');

describe('Notification test', () => {
  it('new Notification()', () => {
    const notification = new Notification('testId60');
    notification.setTelegramId('testId61');
    notification.getTelegramId().should.eql('testId61');
  });

  it('appends', () => {
    const notification = new Notification('testId63');
    notification.appendDay('test');
    notification.setSport('test');
    notification.setTime(0,0);
    notification.appendLocal('test');

    notification.getDay(0).should.eql('test');
    notification.getSport().should.eql('test');
    notification.getMinutes().should.eql(0);
    notification.getHours().should.eql(0);
    notification.getLocal(0).should.eql('test');
  });
});
