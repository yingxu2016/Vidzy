var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
	title: String,
	genre: String,
	description: String
});

module.exports = mongoose.model('Video', videoSchema);
