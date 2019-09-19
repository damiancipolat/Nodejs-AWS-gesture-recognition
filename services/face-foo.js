//Parse the aws-rekognition - face analysis response.
const parse = (faceObj)=>{

	if (!(faceObj&&faceObj.FaceDetails&&faceObj.FaceDetails.length>0))
		throw Error('Bad aws-rekognition format');

	return faceObj.FaceDetails[0];

}

module.exports = {
	parse
};