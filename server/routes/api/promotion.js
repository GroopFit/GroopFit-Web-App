const express = require('express');
const router = express.Router();
const promotionController = require('../../controllers/promotionController');

router.route('/coming-soon')
    .post(promotionController.addToEmailList);

module.exports = router;