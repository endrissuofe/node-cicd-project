const { expect } = require('chai');
const request = require('supertest');
const app = require('./index');

// Unit Test Example
describe('Unit Tests', () => {
  it('should return true for a simple check', () => {
    const simpleCheck = () => true;
    expect(simpleCheck()).to.be.true;
  });
});

// Integration Test Example
describe('Integration Tests - Express App', () => {
  it('should return 200 and correct response body for GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<h1>Welcome to My CI/CD Demo</h1>');
        done();
      });
  });
});
