const express = require("express")
const router = express.Router()

const appointmentsController = require("../controllers/appointments")

router.get('/appointments', appointmentsController.getAllAppointments)
router.get("/appointments/:id", appointmentsController.getOneAppointment)
router.post("/appointments", appointmentsController.addOneAppointment)
router.patch("/appointments/:id", appointmentsController.updateOneAppointment)
router.patch('/appointments/:id/completed', appointmentsController.completedOneAppointment)
router.delete('/appointments/:id', appointmentsController.deleteOneAppointment)


module.exports = router
