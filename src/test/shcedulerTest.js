/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const Scheduler = require('../utils/scheduler');


describe('Get week day', () => {
  it('getDateTime()', () => {
    const weekDay = Scheduler.getDateTime();
    weekDay.should.be.within(0, 6);
  });
});

describe('Get no notification', () => {
  it('getDailyNotifications()', (done) => {
    Scheduler.getDailyNotifications().then((notificationArray) => {
      notificationArray.length.should.be.eql(0);
      done();
    });
  });
});

describe('Get nothing', () => {
  it('makeSchedule()', (done) => {
    Scheduler.makeSchedule({ times: [] }).then((nothing) => {
      if (nothing) {
        nothing = 1;
      } else {
        nothing = 0;
      }

      nothing.should.be.eql(0);
      done();
    });
  });
});
