const AWS 	 = require('aws-sdk');
const config = require('config');

const {
	parse
} = require('./face-foo.js');

//Get credentials.
const creds = config.get('aws');

//Set aws credentials
const rekognition = new AWS.Rekognition(creds);

//Process the image vs a gesture.
const processGesture = async (image,gesture)=>{
	
	//Process the image using rekognition.
	const result = await rekognition.detectFaces(image).promise();
	
	//Parse the structure from the response.
	const face = parse(result);

	//Make result structure.
	const listResult = gesture.map(fn =>({
		name  : fn.name,
 		match : fn(face)
	}));

	//Final result.
	const match = listResult.every(resu => resu.match===true);

	return {
		gestures : listResult,
		match
	};

}

module.exports = {
	processGesture
}
