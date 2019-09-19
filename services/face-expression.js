//Detect if in the image there are a human face.
const likeAface = (rekObj) => !!rekObj;

//Detect if in the image the face is a male face.
const isMale 	  = (rekObj) => (rekObj&&rekObj.Gender&&rekObj.Gender.Value&&rekObj.Gender.Value==="Male")?true:false;

//Detect if in the image the face is a femamale face.
const isWomen	  = (rekObj) => (rekObj&&rekObj.Gender&&rekObj.Gender.Value&&rekObj.Gender.Value==="Female")?true:false;

//Detect if the person in the image has the mouth open.
const isMouthOpen  = (rekObj) => (rekObj&&rekObj.MouthOpen&&rekObj.MouthOpen.Value&&rekObj.MouthOpen.Value===true)?true:false;

//Detect if the person in the image has the eyes open.
const isEyesOpen   = (rekObj) => (rekObj&&rekObj.EyesOpen&&rekObj.EyesOpen.Value&&rekObj.EyesOpen.Value===true)?true:false;

//Detct if the person has the eyes closed.
const isEyesClosed = (rekObj) => (rekObj&&rekObj.EyesOpen&&rekObj.EyesOpen.Value&&rekObj.EyesOpen.Value===false)?true:false;

//Detect if the person in the face is sminling.
const isSmiling = (rekObj) => (rekObj&&rekObj.Smile&&rekObj.Smile.Value&&rekObj.Smile.Value===true)?true:false;

//Detect if the person in the image has a happy emotion.
const isHappy = (rekObj) => {

	if (rekObj&&rekObj.Emotions){

		const type = rekObj.Emotions.find(typeObj => typeObj.Type==="HAPPY");

		if (type&&type.Confidence)
			return type.Confidence >= 80;

	}

	return false;

}

//Detect if the persons uses glasess.
const useGlasses    = (rekObj) => (rekObj&&rekObj.Eyeglasses&&rekObj.Eyeglasses.Value&&rekObj.Eyeglasses.Value===true)?true:false;

//Detect if the persons uses sun glasess.
const useSunGlasses = (rekObj) => (rekObj&&rekObj.Sunglasses&&rekObj.Sunglasses.Value&&rekObj.Sunglasses.Value===true)?true:false;

module.exports = {
	likeAface,
	isMale,
	isWomen,
	isMouthOpen,
	isEyesOpen,
	isEyesClosed,
	isSmiling,
	isHappy,
	useGlasses,
	useSunGlasses
};