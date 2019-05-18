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
    const notification = new Notification('testId689');
    notification.appendDay('test');
    notification.setSport('test');
    notification.setTime(0, 0);
    notification.appendLocal('test');
    notification.setHoursBefore(0);
    notification.setMinutesBefore(0);
    notification.setDay(0);
    notification.setMonth(0);
    notification.setYear(0);

    notification.getDays(0).should.eql('test');
    notification.getSport().should.eql('test');
    notification.getMinutes().should.eql(0);
    notification.getHours().should.eql(0);
    notification.getLocal(0).should.eql('test');
    notification.getHoursBefore().should.eql(0);
    notification.getMinutesBefore().should.eql(0);
    notification.getDay().should.eql(0);
    notification.getMonth().should.eql(0);
    notification.getYear().should.eql(0);
  });
});
