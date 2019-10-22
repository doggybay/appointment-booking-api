const knex = require("../db/knex");
const User = require('../models/User')

exports.getAllUsers = (req, res) => {
  User.query().eager('appointments').then(users => res.json(users))
}

exports.getOneUser = (req, res) => {
  User.query().findById(req.params.id).eager('appointments').then(user => res.json(user))
}