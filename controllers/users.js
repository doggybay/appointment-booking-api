const knex = require("../db/knex");
const User = require('../models/User')

exports.getAllUsers = (req, res) => {
  User.query().eager('appointments').then(result => res.json(result))
}