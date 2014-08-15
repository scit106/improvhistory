var config = {};

config.mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost/improv-history';

module.exports = config;
