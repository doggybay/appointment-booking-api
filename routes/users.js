const express = require('express');
const router = express.Router();


const usersController = require('../controllers/users')

//Gets all users
router.get('/users', usersController.getAllUsers);

//Gets one user
router.get('/users/:id', usersController.getOneUser)

module.exports = router;
