var should = require('chai').should();
var nock = require('nock');
var lifecycle = require('../../lib/lifecycle');

describe('#track', function () {
	var apiKey = process.env.LIFECYCLE_API_KEY;

	describe('Without an api key', function () {

		before(function (done) {
			process.env.LIFECYCLE_API_KEY = '';
			done();
		});

		it('should return an error', function (done) {
			lifecycle.track('event', 'id', {}, function (err, res) {
				should.not.exist(res);
				should.exist(err);
				err.error.should.equal('Lifecycle Authorization Failed');
				err.message.should.equal('LIFECYCLE_API_KEY is not set');
				done();
			});
		});

		after(function (done) {
			process.env.LIFECYCLE_API_KEY = apiKey;
			done();
		});
	});

	describe('With an api key', function () {

		it('should hit the Lifecycle api server', function (done) {
			nock.cleanAll();
			nock('https://api.lifecycle.io/v1')
				.post('/track')
				.reply(200);

			lifecycle.track('event', 'id', {}, function (err, res) {
				should.not.exist(err);
				should.exist(res);
				res.statusCode.should.equal(200);
				done();
			});
		});
	});
});