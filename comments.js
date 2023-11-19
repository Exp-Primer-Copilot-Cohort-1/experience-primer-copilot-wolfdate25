// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models/db.js');

// Get all comments
router.get('/', function(req, res) {
	db.Comment.findAll().then(function(comments) {
		res.json(comments);
	});
});

// Get a comment by id
router.get('/:id', function(req, res) {
	db.Comment.find({
		where: {
			id: req.params.id
		}
	}).then(function(comment) {
		if (!comment) {
			res.status(404).send();
		} else {
			res.json(comment);
		}
	});
});

// Create a new comment
router.post('/', function(req, res) {
	db.Comment.create({