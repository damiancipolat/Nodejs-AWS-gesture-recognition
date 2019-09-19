const express = require('express');
const router  = express.Router();

//Upload file.
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//Load controllers.
const {
	eyesOpenController,
	eyesClosedController,
	smilingController
} = require('../controller/gestures.js');

router.post('/eyes-open',   upload.single('picture'), eyesOpenController);
router.post('/eyes-closed', upload.single('picture'), eyesClosedController);
router.post('/smiling',     upload.single('picture'), smilingController);

module.exports = router;