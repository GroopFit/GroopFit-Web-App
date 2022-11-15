const express = require('express');
const router = express.Router();
const activityController = require('../../controllers/activityController');

router.route('/')
    .get(activityController.getAllUsersActivities);

router.route('/:id')
    .get(activityController.getAllUserActivities)
    .post(activityController.createActivity)
    .delete(activityController.deleteActivity)
    .put(activityController.replaceActivity)
    .patch(activityController.updateActivity);

module.exports = router;