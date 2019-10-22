const User = require('../models/User')

//Locates all users and adds the appointments related based on the users_appointments table and returns all users with appointments
exports.getAllUsers = (req, res) => {
  User.query().eager('appointments').then(users => res.json(users))
}

//Locates and returns said user with appointments related to user based on join table
exports.getOneUser = (req, res) => {
  User.query().findById(req.params.id).eager('appointments').then(user => res.json(user))
}

//Locates one user then filters out the completed appointments
exports.getOneUserAppts = (req, res) => {
  User.query().findById(req.params.id).eager('appointments').then(user => {
    let activeAppts = user.appointments.filter(appointment => !appointment.completed)
    user.appointments = activeAppts
    return res.json(user)
  })
}