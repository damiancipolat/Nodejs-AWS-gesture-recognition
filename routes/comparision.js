const express = require('express');
const multer  = require('multer');
const router  = express.Router();

//Load controllers.
const {
	compareController
} = require('../controller');

const upload = multer({ dest: 'uploads/' });

router.post('/comparision',compareController);

module.exports = router;