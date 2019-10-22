const Appointment = require('../models/Appointment')
const knex = require('../db/knex')

exports.getAllAppointments = (req, res) => {
  Appointment.query().eager('users').then(result => res.json(result))
}

exports.getOneAppointment = (req, res) => {
  Appointment.query().findById(req.params.id).eager('users').then(result => res.json(result))
}

//Creates a new appointment and inserts the new appointment details to the join table
exports.addOneAppointment = (req, res) => {
  Appointment.query().insert(req.body).then(newAppointment => {
    knex('users_appointments').insert({
      user_id: newAppointment.creator_id,
      appointment_id: newAppointment.id
    }).then(result => result)
    return res.json(newAppointment)
    
  }).catch(err => res.json(err))
  
}

exports.updateOneAppointment = (req, res) => {
  Appointment.query().findById(req.params.id).patch(req.body).returning('*').then(updatedAppointment => res.json(updatedAppointment))
}

exports.deleteOneAppointment = (req, res) => {
  Appointment.query().deleteById(req.params.id).returning('*').then(deletedAppointment => res.json(deletedAppointment))
}

exports.completedOneAppointment = (req, res) => {
  Appointment.query().findById(req.params.id).patch({ completed: true }).returning('*').then(updatedAppointment => res.json(updatedAppointment))
}