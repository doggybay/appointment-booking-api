const knex = require("../db/knex");
const Appointment = require('../models/Appointment')

exports.getAllAppointments = (req, res) => {
  Appointment.query().eager('users').then(result => res.json(result))
}

exports.getOneAppointment = (req, res) => {
  Appointment.query().findById(req.params.id).eager('users').then(result => res.json(result))
}

exports.addOneAppointment = (req, res) => {
  Appointment.query().insert(req.body).then(result => res.json(result)).catch(err => res.json(err))
  
}

exports.updateOneAppointment = (req, res) => {
  Appointment.query().findById(req.params.id).patch(req.body).returning('*').then(updatedAppointment => res.json(updatedAppointment))
}

exports.deleteOneAppointment = (req, res) => {
  Appointment.query().deleteById(req.params.id).returning('*').then(deletedAppointment => res.json(deletedAppointment))
}