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

		console.log('* API Gestures - process request',req.files);

		//Load file.
		const img = await loadFile('./selfie.jpeg');

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