var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Video = require('../models/Video.js');

mongoose.connect('mongodb://localhost:27017/vidzy', function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});


router.get('/', function(req, res, next) {
	Video.find({}, function(err, videos) {
		if (err) throw err;
		res.json(videos);
	})

});

router.post('/', function(req, res, next) {
	if (!req.body) return res.sendStatus(400);
	var videoToAdd = {
		title: req.body.title,
		description: req.body.description
	};

	Video.create(videoToAdd, function(err, video) {
		if (err) throw err;
		res.json(video);
	})
});

module.exports = router;