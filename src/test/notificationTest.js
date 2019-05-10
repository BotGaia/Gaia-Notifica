/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const Notification = require('../models/Notification');


describe('Create Notification', () => {
  it('new Notification()', () => {
    const notification = new Notification('testId60');
    notification.setTelegramId('testId61');
    notification.getTelegramId().should.eql('testId61');
  });
});

describe('Append objects', () => {
  it('appends', () => {
    const notification = new Notification('testId62');
    notification.appendDay('test');
    notification.appendSport('test');
    notification.appendTime('test');
    notification.appendLocal('test');

    notification.getDay(0).should.eql('test');
    notification.getSport(0).should.eql('test');
    notification.getTimes(0).should.eql('test');
    notification.getLocal(0).should.eql('test');
  });
});
