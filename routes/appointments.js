const express = require("express")
const router = express.Router()

const appointmentsController = require("../controllers/appointments")

//Gets all appointments
router.get('/appointments', appointmentsController.getAllAppointments)

//Gets one appointment
router.get("/appointments/:id", appointmentsController.getOneAppointment)
//Creates a new appointment
router.post("/appointments", appointmentsController.addOneAppointment)

//Updates an existing appointment
router.patch("/appointments/:id", appointmentsController.updateOneAppointment)

//Updated the completed field only to true
router.patch('/appointments/:id/completed', appointmentsController.completedOneAppointment)

//Deletes one appointment
router.delete('/appointments/:id', appointmentsController.deleteOneAppointment)


module.exports = router
