const assert = require('assert');

const {
	loadFile
} = require('../lib/lib.js');

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

//Gesture generic controll.er
const gestureController = (gesture) => async (req,res)=>{

	try {

		console.log('* API Gestures - processing request - EYES OPEN...');

		//Validate image file.
		assert(req&&req.file,'File not found in request');

		const result = await processBatch(req,gesture);
		res.status(200).json(result);

	} catch(err){

		console.log('* API Gestures - error',err);
		res.status(500).json({error:err});

	}

}

module.exports = {
	gestureController
};