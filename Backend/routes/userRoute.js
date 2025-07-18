import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile,bookAppointment, listAppointment, cancelAppointment, stripePayment, verifyPayment, nearbyDoctors, searchNearbyDoctors, joinDoctor} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'



const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/join_doctor',joinDoctor)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment',authUser,stripePayment)
userRouter.post('/verify-payment',authUser,verifyPayment)
userRouter.post('/search-doctors',authUser,nearbyDoctors)
userRouter.post('/search_bar-doctors',authUser,searchNearbyDoctors)





export default userRouter