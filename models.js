var mongoose = require('mongoose');

// var registerSchemas = function(){
// 	subscriberSchema = new mongoose.Schema({
// 		email: {type: String, required: true}
// 		, firstName: {type: String}
// 		, lastName: {type: String}
// 	});

// 	Subscriber = mongoose.model('Subscriber', subscriberSchema);
// console.log('Registered Schemas');
// return true;
// }

var subscriberSchema = new mongoose.Schema({
	email: {type: String, required: true}
	, firstName: {type: String}
	, lastName: {type: String}
});

var Subscriber = mongoose.model('Subscriber', subscriberSchema);

// module.exports.registerSchemas = registerSchemas;
module.exports = {
	subscriberSchema: subscriberSchema
	, Subscriber: Subscriber
}
