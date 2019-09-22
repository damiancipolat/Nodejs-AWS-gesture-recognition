const express = require('express');
const router  = express.Router();

//Upload file, add multer middleware to process multipart request.
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//Gestures recognitors.
const {
	EYESOPEN,
	EYESCLOSED,
	SMILING
} = require('../services/face-gestures.js');

//Load generic controller.
const {
	gestureController
} = require('../controller/gestures.js');

router.post('/eyes-open',   upload.single('picture'), gestureController(EYESOPEN));
router.post('/eyes-closed', upload.single('picture'), gestureController(EYESCLOSED));
router.post('/smiling',     upload.single('picture'), gestureController(SMILING));

module.exports = router;