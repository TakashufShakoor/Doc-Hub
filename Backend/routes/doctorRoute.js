import express from 'express'
import { appointmentCancelled, appointmentComplete, doctorList, getDoctorAppointments, loginDoctor } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,getDoctorAppointments)
doctorRouter.post('/appointment-complete',authDoctor,appointmentComplete)
doctorRouter.post('/appointment-cancel',authDoctor,appointmentCancelled)

export default doctorRouter 