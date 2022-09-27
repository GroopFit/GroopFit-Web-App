const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/google', authController.handleLoginGoogle);
//router.post('/facebook', authController.handleLoginFacebook);
//router.post('/apple', authController.handleLoginApple);
//router.post('/twitter', authController.handleLoginTwitter);

module.exports = router;