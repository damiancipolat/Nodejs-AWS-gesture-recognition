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

//Gesture controller.
const gestureController = async (req,res)=>{

	try {

		console.log('* API Gestures - processing request...');

		//Validate image file.
		assert(req&&req.file,'File not found in request');

		const {
			destination,
			filename
		} = req.file;

		//Load file.
		const file = destination+filename;
		const img  = await loadFile(file);

		//Process image.
		const result = await processGesture(img,EYESOPEN);

		res.status(200).json(result);

	} catch(err){

		console.log('* API Gestures - error',err);
		res.status(500).json({error:err});

	}

};

module.exports = {
	gestureController
};