var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongo = require('mongodb')
  , mongoose = require('mongoose')
  , _ = require('underscore')
  , config = require('./config.js')
  , models = require('./models.js')
  // , shows = require('./shows.js')
  , seeds = require('./seeds.js')
  , jade = require('jade');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'jade')

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(express.bodyParser()); // this will be deprecated soon, replace with
// app.use(express.bodyParser.json());
// app.use(express.bodyParser.urlencoded());

mongoose.connect(config.mongoURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// seeds.seedVenuesAndShows();
	console.log('Opened mongoose connection');
});

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	models.Show.find().populate('venue').exec(function(err, shows){
		if (err) {
			console.log('render error');
			res.render('index', {showError: err});
		}
		else {
			res.render('index', {shows: shows});
		}
	});
});

app.get('/venues', function(req, res) {
	models.Venue.find(function(err, venues) {
		if (!err && venues) {
			res.send(venues);
		}
		else {
			res.send(err);
		}
	});
});

app.get('/venues/edit', function(req, res){
	res.render('venue');
})

app.post('/venues/edit', function(req, res) {
	var shortName;
	if (shortName = req.body.shortName){
		models.Venue.findOne({shortName: shortName}, function(err, existingVenue) {
			if (existingVenue) {
				existingVenue.update({shortName: shortName}, req.body, function(err){
					if (err) {
						res.send(err);
					}
					else {
						res.send(200);
					}
				});
			}
			else if (err) {
				console.log('Error creating or updating a venue');
				console.log(err);
				res.send(err);
			}
			else {
				models.Venue.create(req.body, function(err, newVenue) {
					if (newVenue && !err) {
						res.send(200);
					}
					else {
						console.log('Error creating new venue');
						console.log(err);
						res.send(err);
					}
				});
			}
		});
	}
});

app.get('/shows', function(req, res) {
	models.Show.find(function(err, shows) {
		if (!err && shows) {
			res.send(shows);
		}
		else {
			res.send(err);
		}
	});
});

app.get('/newsletter', function(req, res) {
	res.render('newsletter');
});

app.get('/unsubscribe', function(req, res) {
	res.render('unsubscribe');
});

// Really, we shouldnt use this - no one should be able to see all of our subscribers
app.get('/subscribers', function(req, res) {
	models.Subscriber.find({}, function(err, docs){
		if (!err) {
			res.send(200, 'Having fun snooping around?');
		}
		else {
			res.send(400, err);
		}
	});
});

// add someone to the email list
app.post('/subscribers', function(req, res) {
	if (req.body.email) {
		models.Subscriber.findOne({email: req.body.email}, function (err, existingSubscriber){
			if (!existingSubscriber) { // Good, no subscriber exists
				var newSubscriber = new models.Subscriber(req.body);
				newSubscriber.save(function (err){
					if (err) {
						console.log(err);
						res.send(500, 'Sorry, something went wrong. Please try again later.');
					}
					else {
						res.send(200, 'Saved Successfully');
					}
				});
			}
			else if (existingSubscriber) {
				res.send(400, 'That Email Address is Already Subscribed!');
			}
			else if (err) {
				res.send(500, 'Sorry, something went wrong. Please try again later.');
			}
			else {
				res.send(500, 'Sorry, something went wrong. Please try again later.');
			}
		});
	}
	else
		res.send(400, 'Please Enter an Email Address');
});

app.delete('/subscribers', function (req, res) {
	var unsubscribeEmail = req.query.email
	if (unsubscribeEmail) {
		models.Subscriber.findOne({email: unsubscribeEmail}, function (err, unsubscriber){
			if (unsubscriber.email) {
				models.Subscriber.remove({email: unsubscriber.email}, function (err){
					if (!err) {
						res.send(200, 'Removed Successfully');
					}
					else
						res.send(500, 'Sorry, something went wrong. Please try again later.');
				});
			}
			else
				res.send(404, 'We could not find that subscriber. Please check your spelling and try again.')
		});
	}
	else
		res.send(400, 'Please Enter an Email Address');
});

app.get('*', function(req, res) {
	res.render('index');
});
