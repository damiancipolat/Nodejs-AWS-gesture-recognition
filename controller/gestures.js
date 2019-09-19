const assert = require('assert');

const {
	loadFile
} = require('../lib/lib.js');

const {
	EYESOPEN,
	EYESCLOSED,
	SMILING
} = require('../services/face-gestures.js');

const {
	processGesture
} = require('../services/face-processor.js');

//Process gesture batch.
const processBatch = async (req, GESTURE)=>{

	const {
		destination,
		filename
	} = req.file;

	//Load file.
	const file = destination+filename;
	const img  = await loadFile(file);

	//Process image.
	return await processGesture(img,GESTURE);

}

//SMILING CONTROLLER.
const smilingController = async (req,res)=>{

	try {

		console.log('* API Gestures - processing request - SMILING...');

		//Validate image file.
		assert(req&&req.file,'File not found in request');

		const result = await processBatch(req, SMILING);
		res.status(200).json(result);

	} catch(err){

		console.log('* API Gestures - error',err);
		res.status(500).json({error:err});

	}

};

//EYES CLOSED CONTROLLER.
const eyesClosedController = async (req,res)=>{

	try {

		console.log('* API Gestures - processing request - EYES CLOSED...');

		//Validate image file.
		assert(req&&req.file,'File not found in request');

		const result = await processBatch(req, EYESCLOSED);
		res.status(200).json(result);

	} catch(err){

		console.log('* API Gestures - error',err);
		res.status(500).json({error:err});

	}

};

//EYES OPEN CONTROLLER.
const eyesOpenController = async (req,res)=>{

	try {

		console.log('* API Gestures - processing request - EYES OPEN...');

		//Validate image file.
		assert(req&&req.file,'File not found in request');

		const result = await processBatch(req,EYESOPEN);
		res.status(200).json(result);

	} catch(err){

		console.log('* API Gestures - error',err);
		res.status(500).json({error:err});

	}

};

module.exports = {
	eyesOpenController,
	eyesClosedController,
	smilingController
};