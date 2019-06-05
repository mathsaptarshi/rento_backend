const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Crew = db.crew;

// const Op = db.Sequelize.Op;

// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');


exports.createCrew = (req, res) => {	
	// Save Crew to Database
	console.log("Processing func -> createcrew");
	Crew.create({
		name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        license: req.body.license,
        address: req.body.address,
        photo: req.body.photo,
		info: req.body.info,
		experience: req.body.experience,  
	})
	.then(() => {
		res.send("Crew registered successfully!");
    })		
	.catch(err => {
		res.status(500).send("Error -> " + err);
	})
}

exports.getAllCrew = (req, res) => {	
	
	Crew.findAll()
	.then(crew => {
		res.status(200).json({
			"description": "User Content Page",
			"crew": crew
		});
	})	
	.catch(err => {
		res.status(500).send("Error -> " + err);
	})
}