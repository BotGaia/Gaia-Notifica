/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const User = require('../models/User');
const app = require('../index');
const routes = require('../routes')(app);

const user = new User();
describe('/POST registerUser', () => {
  it('Save User', (done) => {
    const mockJson = {
      telegramId: 'testId',
    };

    chai.request(routes)
      .post('/registerUser')
      .send(mockJson)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.user.telegramId.should.eql('testId');
        done();
      });
  });
});
