var venues = {
	riot: {
		displayName: 'The Riot Theater',
		addressLink: 'https://www.google.com/maps/place/146+South+St,+Jamaica+Plain,+MA+02130/@42.3049835,-71.1145205,17z/data=!3m1!4b1!4m2!3m1!1s0x89e37969fd10a495:0xbea2d0255b47d04e',
		addressStreet: '146A South Street',
		addressCity: 'Jamaica Plain, MA 02130'
	}
}

var shows = [
	{
		slug: 'riot-oct',
		date: '2015-10-23',
		time: '10:00 PM',
		location: venues.riot.displayName,
		ticketLink: null,
		showName: 'Improvised History: Revolution!',
		addressLink: venues.riot.addressLink,
		addressStreet: venues.riot.addressStreet,
		addressCity: venues.riot.addressCity,
		showDescription: 'Joined by our friend and local history enthusiast Emily "Red" Kovatch, we will hear exciting stories from the early years of our country and bring them to life before your eyes!'
	},
	{
		slug: 'riot-halloween',
		date: '2015-10-31',
		time: '8:00 PM',
		location: venues.riot.displayName,
		ticketLink: null,
		showName: 'Improvised History: Salem Special',
		addressLink: venues.riot.addressLink,
		addressStreet: venues.riot.addressStreet,
		addressCity: venues.riot.addressCity,
		showDescription: 'Joined by our friend and local history enthusiast Emily "Red" Kovatch, we will hear exciting stories from the early years of our country and bring them to life before your eyes!'
	},
]

module.exports = shows
