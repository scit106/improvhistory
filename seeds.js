var mongoose = require('mongoose')
	, models = require('./models.js');


var venues = [{
	shortName: 'riot',
	displayName: 'The Riot Theater',
	addressLink: 'https://www.google.com/maps/place/146+South+St,+Jamaica+Plain,+MA+02130/@42.3049835,-71.1145205,17z/data=!3m1!4b1!4m2!3m1!1s0x89e37969fd10a495:0xbea2d0255b47d04e',
	addressStreet: '146A South Street',
	addressCity: 'Jamaica Plain, MA 02130'
}];

var shows = [
	{
		slug: 'riot-oct',
		date: '2015-10-23',
		time: '10:00 PM',
		ticketLink: null,
		showName: 'Improvised History: Revolution!',
		showDescription: 'Joined by our friend and local history enthusiast Emily "Red" Kovatch, we will hear exciting stories from the early years of our country and bring them to life before your eyes!'
	},
	{
		slug: 'riot-halloween',
		date: '2015-10-31',
		time: '8:00 PM',
		ticketLink: null,
		showName: 'Improvised History: Salem Special',
		showDescription: 'Insert description here'
	},
]
	


var seedShowsForVenue = function seedShowsForVenue(currentVenue) {
	console.log('seeding shows')
	models.Venue.findOne(currentVenue, function(err, venue){
		var showToCreate = shows[0]
		showToCreate.venue = venue
		console.log(showToCreate)
		models.Show.update(showToCreate, showToCreate, {upsert: true}, function(err, show){
			if (err) {
				console.log(err);
			}
			else {
				console.log(show)
			}
		});
	});
}


exports.seedVenuesAndShows = function seedVenuesAndShows() {
	console.log('seeding venues')
	models.Venue.update(venues[0], venues[0], {upsert: true}, function(err, venue){
		if (err) {
			console.log(err);
		}
		else {
			seedShowsForVenue(venue)
		}
	}); // I should eventually put this in a loop
};

