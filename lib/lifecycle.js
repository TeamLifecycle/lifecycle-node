var request = require('request');
var url = process.env.LIFECYCLE_API_URL || 'https://api.lifecycle.io/v1'

exports.track = function (eventId, uniqueId, properties, callback) {

	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return callback ({'error': 'Lifecycle Authorization Failed', 'message': 'LIFECYCLE_API_KEY is not set'}, null);
	}

	var options = {
		url: url + '/track',
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		json: true,
		body: {
			event_id: eventId,
			unique_id: uniqueId,
			properties: properties
		}
	};

	request(options, callback);
};

exports.identify = function (uniqueId, defaultAttributes, extraAttributes, callback) {

	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return callback({'error': 'Lifecycle Authorization Failed', 'message': 'LIFECYCLE_API_KEY is not set'}, null);
	}

	if (!uniqueId || typeof uniqueId !== 'string') {
		return callback({'error': 'Lifecycle Invalid Parameters', 'message': '`uniqueId` must be supplied to `Identify` function'}, null);
	}

	var sendData = defaultAttributes;
	sendData.unique_id = uniqueId;
	sendData.attributes = extraAttributes;

	var options = {
		url: url + '/identify',
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		json: true,
		body: sendData
	};

	request(options, callback);
};