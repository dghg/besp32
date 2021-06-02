/*
	AWS Lambda Handler Function
*/

var AWS = require('aws-sdk');
var uuid = require('uuid/v1');

var dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
	// TODO IMPLEMENT
	var params = {
		TableName: process.env.DYNAMO_TABLE,
		Item: {
			id: uuid(),
			timestamp: Date.now().toString(),
			payload: JSON.stringify(event, null, 2)
		}
	}

	dynamo.put(params, function (err, data) {
		if(err) {
			console.error("Error" , JSON.stringify(err, null, 2));
			callback(err);
		} else {
			callback(null, 'DynamoDB updated');
		}
	})
	const response = {	
		
	}
}