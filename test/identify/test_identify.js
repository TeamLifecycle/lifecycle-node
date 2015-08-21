var should = require('chai').should();
var nock = require('nock');
var lifecycle = require('../../lib/lifecycle');

describe('#identify', function () {
	var apiKey = process.env.LIFECYCLE_API_KEY;

	describe('Without an api key', function () {

		before(function (done) {
			process.env.LIFECYCLE_API_KEY = '';
			done();
		});

		it('should return an error', function (done) {
			lifecycle.identify('id', {}, {}, function (err, res) {
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

		it('should catch a null `uniqueId`', function (done) {
			lifecycle.identify(null, {}, {}, function (err, res) {
				should.not.exist(res);
				should.exist(err);
				err.error.should.equal('Lifecycle Invalid Parameters');
				err.message.should.equal('`uniqueId` must be supplied to `Identify` function');
				done();
			});
		});

		it('should catch a missing `uniqueId`', function (done) {
			lifecycle.identify({}, {}, function (err, res) {
				should.not.exist(res);
				should.exist(err);
				err.error.should.equal('Lifecycle Invalid Parameters');
				err.message.should.equal('`uniqueId` must be supplied to `Identify` function');
				done();
			});
		});

		it('should hit the Lifecycle api server', function (done) {
			nock.cleanAll();
			nock('https://api.lifecycle.io/v1')
				.post('/identify')
				.reply(200);

			lifecycle.identify('id', {}, {}, function (err, res) {
				should.not.exist(err);
				should.exist(res);
				res.statusCode.should.equal(200);
				done();
			});
		});

		it('should hit the Lifecycle api server without an optional parameter', function (done) {
			nock.cleanAll();
			nock('https://api.lifecycle.io/v1')
				.post('/identify')
				.reply(200);

			lifecycle.identify('id', {}, function (err, res) {
				should.not.exist(err);
				should.exist(res);
				res.statusCode.should.equal(200);
				done();
			});
		});

		it('should hit the Lifecycle api server without an all optional parameters', function (done) {
			nock.cleanAll();
			nock('https://api.lifecycle.io/v1')
				.post('/identify')
				.reply(200);

			lifecycle.identify('id', function (err, res) {
				should.not.exist(err);
				should.exist(res);
				res.statusCode.should.equal(200);
				done();
			});
		});
	});
});