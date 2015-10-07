var mongoose = require('mongoose')
	, models = require('./models.js');


var venues = [{
	shortName: 'riot',
	displayName: 'The Riot Theater',
	addressLink: 'https://www.google.com/maps/place/146+South+St,+Jamaica+Plain,+MA+02130/@42.3049835,-71.1145205,17z/data=!3m1!4b1!4m2!3m1!1s0x89e37969fd10a495:0xbea2d0255b47d04e',
	addressStreet: '146A South Street',
	addressCity: 'Jamaica Plain, MA 02130'
}];
	
exports.seedVenues = function seedVenues() {
	console.log('seeding venues')
	models.Venue.update(venues[0], venues[0], {upsert: true}, function(err, venue){
		if (err) {
			console.log(err);
		}
	}); // I should eventually put this in a loop
};

