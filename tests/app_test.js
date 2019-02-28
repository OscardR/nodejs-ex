import {default as server} from '../server';
import chai from 'chai';
import chaiHTTP from 'chai-http';

// This is needed for the res.should below to work...
let should = chai.should();

chai.use(chaiHTTP);

const reqServer = process.env.HTTP_TEST_SERVER || server;

describe('Basic routes tests', function () {
  it('GET to / should return 200', function (done) {
    chai.request(reqServer)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

  it('GET to /pagecount should return 200', function (done) {
    chai.request(reqServer)
      .get('/pagecount')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

  it('GET to /test should return 200', function (done) {
    chai.request(reqServer)
      .get('/test')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
