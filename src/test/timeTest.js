/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Time = require('../models/Time');


describe('Create Time', () => {
  it('new Time()', () => {
    const time = new Time(5, 5);
    time.hour.should.eql(5);
    time.minute.should.eql(5);
  });
});
