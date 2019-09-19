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
} = require('./face-expression.js');

//function list to detect gestures.
const EYESOPEN   = [likeAface, isEyesOpen];
const EYESCLOSED = [likeAface, isEyesClosed];
const SMILING	 = [likeAface, isSmiling, isHappy];

module.exports = {
	EYESOPEN,
	EYESCLOSED,
	SMILING
};