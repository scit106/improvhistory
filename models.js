var mongoose = require('mongoose');


//Schemas
var subscriberSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true}
	, firstName: {type: String}
	, lastName: {type: String}
});


//Models
var Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Exports
module.exports = {
	subscriberSchema: subscriberSchema
	, Subscriber: Subscriber
}
