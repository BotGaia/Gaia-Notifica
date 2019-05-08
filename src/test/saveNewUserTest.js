/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const User = require('../models/User');
const app = require('../index');
const routes = require('../routes')(app);

describe('/POST registerUser', () => {
  it('Register User', (done) => {
    const mockJson = {
      telegramId: 'testId2',
      sport: '',
      local: '',
      notificationDays: '',
      notificationTime: '',
    };

    chai.request(routes)
      .post('/registerUser')
      .send(mockJson)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.user.telegramId.should.eql('testId2');
        res.body.user.sport.should.eql([['']]);
        res.body.user.local.should.eql([['']]);
        res.body.user.notificationDays.should.eql([['']]);
        res.body.user.notificationTime.should.eql([['']]);
        done();
      });
  });
});

describe('Save user', () => {
  it('Save user', (done) => {
    const user = new User('testId2');

    user.saveUser().then(() => {
      user.findMe().then((isFound) => {
        isFound.should.eql(true);
        user.getTelegramId().should.eql('testId2');
        done();
      });
    });
  });
});
