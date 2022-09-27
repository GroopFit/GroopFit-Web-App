const express = require('express');
const router = express.Router();
const activityController = require('../../controllers/ActivityController');

router.route('/')
    .get(activityController.getAllActivities)
    .post(activityController.createActivity);

router.route('/:id')
    .get(activityController.getActivity)
    .delete(activityController.deleteActivity)
    .put(activityController.replaceActivity)
    .patch(activityController.updateActivity);

module.exports = router;