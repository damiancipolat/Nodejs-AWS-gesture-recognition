const AWS 		= require('aws-sdk');
const {parse} = require('./face-foo.js');

//Set aws credentials
const rekognition = new AWS.Rekognition({
  accessKeyId: 'AKIAUMZNKWVKQ2DD42DI',
  secretAccessKey: '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',
  region: 'us-west-2',
});

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
