//Get detector functions.
const {
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
} = require('./face-expression-functions.js');

//function list to detect gestures.
const EYESOPEN   = [likeAface, isEyesOpen];
const EYESCLOSED = [likeAface, isEyesClosed];
const SMILING	 = [likeAface, isSmiling, isHappy];
const MOUTHOPEN	 = [likeAface, isMouthOpen];

//All the gestures functions.
const COMPLETE 	 = [
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
];

module.exports = {
	MOUTHOPEN,
	COMPLETE,
	EYESOPEN,
	EYESCLOSED,
	SMILING
};