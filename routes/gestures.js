const express = require('express');
const router  = express.Router();

//Upload file, add multer middleware to process multipart request.
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//Gestures recognitors.
const {
	EYESOPEN,
	EYESCLOSED,
	SMILING,
	COMPLETE,
	MOUTHOPEN
} = require('../services/face-gestures.js');

//Load generic controller.
const {
	gestureController
} = require('../controller/gestures.js');

router.post('/complete',    upload.single('picture'), gestureController(COMPLETE));
router.post('/eyes-open',   upload.single('picture'), gestureController(EYESOPEN));
router.post('/eyes-closed', upload.single('picture'), gestureController(EYESCLOSED));
router.post('/smiling',     upload.single('picture'), gestureController(SMILING));
router.post('/mouth-open',  upload.single('picture'), gestureController(MOUTHOPEN));

module.exports = router;