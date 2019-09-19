const express = require('express');
const router  = express.Router();

//Upload file.
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//Load controllers.
const {
	gestureController
} = require('../controller');

router.post('/',upload.single('picture'),gestureController);

module.exports = router;