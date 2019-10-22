const express = require('express');
const router = express.Router();


const usersController = require('../controllers/users')

//Gets all users
router.get('/users', usersController.getAllUsers);

//Gets one user
router.get('/users/:id', usersController.getOneUser)

//Get one user with appointments
router.get('/users/:id/appointments')

module.exports = router;
