const express = require('express');
const router  = express.Router();

//Load routes.
const gestureRoutes = require('./gestures.js');
const compareRoutes = require('./comparision.js');

router.use('/gestures',gestureRoutes);
router.use('/comparision',compareRoutes);

module.exports = router;