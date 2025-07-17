const { expect } = require('chai');
const request = require('supertest');
const app = require('./index');

describe('CI/CD Demo Tests', function() {
  describe('Unit Tests', function() {
    it('should return true for a simple check', function() {
      const simpleCheck = () => true;
      expect(simpleCheck()).to.be.true;
    });
  });

  describe('Integration Tests - Express App', function() {
    it('should return 200 and correct response body for GET /', function(done) {
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
});
