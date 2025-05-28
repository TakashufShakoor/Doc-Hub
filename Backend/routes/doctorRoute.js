import express from 'express'
import { appointmentCancelled, appointmentComplete, doctorDashboard, doctorList, getDoctorAppointments, getDoctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,getDoctorAppointments)
doctorRouter.post('/appointment-complete',authDoctor,appointmentComplete)
doctorRouter.post('/appointment-cancel',authDoctor,appointmentCancelled)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/get-profile',authDoctor,getDoctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)

export default doctorRouter 