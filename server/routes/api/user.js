
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
//localhost:8000/user
//groopfit/user/
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);
//groopfit/user/:id
router.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .put(userController.replaceUser)
    .patch(userController.updateUser);
    
module.exports = router;