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

var showSchema = new mongoose.Schema({
	slug: {type: String},
	date: {type: Date},
	time: {type: String},
	location: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
	ticketLink: {type: String},
	showName: {type: String},
	showDescription: {type: String}
});


//Models
var Subscriber = mongoose.model('Subscriber', subscriberSchema);
var Venue = mongoose.model('Venue', venueSchema);
var Show = mongoose.model('Show', showSchema);

// Exports
module.exports = {
	subscriberSchema: subscriberSchema
	, Subscriber: Subscriber
	, venueSchema: venueSchema
	, Venue: Venue
	, showSchema: showSchema
	, Show: Show
}
