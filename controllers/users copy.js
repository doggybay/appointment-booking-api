const knex = require("../db/knex");

exports.getAllUsers = (req, res) => {
  knex('users').then(users => res.json(users))
}