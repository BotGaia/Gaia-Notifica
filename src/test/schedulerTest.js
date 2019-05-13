/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const Scheduler = require('../utils/scheduler');


const should = chai.should();


describe('Get week day', () => {
  it('getDateTime()', () => {
    const weekDay = Scheduler.getDateTime();
    weekDay.should.be.within(0, 6);
  });
});

describe('Get no notification', () => {
  it('getDailyNotifications()', (done) => {
    Scheduler.getDailyNotifications().then((notificationArray) => {
      notificationArray.length.should.be.eql(1);
      done();
    });
  });
});

describe('Get nothing', () => {
  it('makeSchedule()', (done) => {
    Scheduler.makeSchedule({ times: {} }).then((nothing) => {
      none = nothing;
      if (none) {
        none = 1;
      } else {
        none = 0;
      }

      none.should.be.eql(0);
      done();
    });
  });
});
