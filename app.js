var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongo = require('mongodb')
  , mongoose = require('mongoose')
  , models = require('./models.js');

var app = express();

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

mongoose.connect('mongodb://localhost/improv-history');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Opened mongoose connection');
  // models.registerSchemas();
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get('/subscribers', function(req, res) {
	models.Subscriber.find({}, function(err, docs){
		// console.log(allSubscribers);
		if (!err) {
			res.send(200, docs);
		}
		else {
			res.send(400, err);
		}
	});

});
