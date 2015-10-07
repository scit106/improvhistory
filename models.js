var mongoose = require('mongoose');


//Schemas
var subscriberSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true}
	, firstName: {type: String}
	, lastName: {type: String}
});

var venueSchema = new mongoose.Schema({
	shortName: {type: String, required: true, unique: true}
	, displayName: {type: String, required: true}
	, addressLink: {type: String}
	, addressStreet: {type: String}
	, addressCity: {type: String}
});


//Models
var Subscriber = mongoose.model('Subscriber', subscriberSchema);
var Venue = mongoose.model('Venue', venueSchema);

// Exports
module.exports = {
	subscriberSchema: subscriberSchema
	, Subscriber: Subscriber
	, venueSchema: venueSchema
	, Venue: Venue
}
