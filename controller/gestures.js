const assert = require('assert');

const {
	loadFile,
	getFileFromBase64
} = require('../lib/lib.js');

const {
	processGesture
} = require('../services/face-processor.js');

//Normal file binary load from request.
const fileLoad = async (req)=>{

	const {
		destination,
		filename
	} = req.file;

	//Load file.
	const file = destination+filename;
	return await loadFile(file);

}

//Process gesture batch.
const processBatch = async (req, GESTURE)=>{

	let img = null;

	if (req.body&&req.body.picture64)
		img = getFileFromBase64(req.body.picture64);
	else
		img = await fileLoad(req);
	
	//Process image.
	return await processGesture(img,GESTURE);

}

//Gesture generic controll.er
const gestureController = (gesture) => async (req,res)=>{

	try {

		console.log('* API Gestures - processing request - EYES OPEN...');

		//Validate image file.
		assert((req.body&&req.body.picture64)||req.file,'File not found in request');

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