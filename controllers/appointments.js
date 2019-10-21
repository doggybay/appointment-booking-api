const knex = require("../db/knex");
const Appointment = require('../models/Appointment')

exports.getAllAppointments = (req, res) => {
  Appointment.query().eager('users').then(result => res.json(result))
}

exports.getOneAppointment = (req, res) => {
  knex('appointments').where('id', req.params.id).then(appointment => res.json(appointment))
}

exports.addOneAppointment = (req, res) => {
  knex('appointments').insert(req.body).returning('*').then(newAppointment => res.json(newAppointment))
}

exports.updateOneAppointment = (req, res) => {
  knex('appointments').update({ ...req.body }).where('id', req.params.id).returning('*').then(updatedAppointment => res.json(updatedAppointment))
}

exports.deleteOneAppointment = (req, res) => {
  knex('appointments').del().where('id', req.params.id).returning('*').then(deletedAppointment => res.json(deletedAppointment))
}