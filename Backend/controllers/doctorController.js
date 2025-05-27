import doctorModel from "../models/doctorModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";

const  changeAvailability = async (req,res)=>{
    try {
        const {docId} = req.body
        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({success: true , message: "Availability Changed"})
    } 
    
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const doctorList = async (req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email'])
        res.json({success : true, doctors})

    } 
    catch (error) {
         res.json({ success: false, message: error.message })
    }
}

// API for doctor Login
const loginDoctor = async(req,res) =>{
    try {
        const { email, password } = req.body
        const Doctor = await doctorModel.findOne({email}) 

        if (!Doctor) {

          return res.json({success:false, message:'Doctor does Not Exist'})
        
        }


        const isMatch = await bcrypt.compare(password,Doctor.password)

        if (isMatch) {
        
             const token = jwt.sign({id: Doctor._id},process.env.JWT_SECRET)
             return res.json({success:true ,message:"Logged In",token})
        }
        
        else{
              return res.json({success:false, message: "Invalid Password"})
            }
                
   
    } 
    catch (error) {

        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// API to get Doctor All Appointments
const getDoctorAppointments = async(req,res) =>{

    try {

        const{docId} = req.body
        const appointments = await appointmentModel.find({docId})
        res.json({success:true,appointments})

    } 
    
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }



}

// API to mark Appointment Completed for Doctor Panel
const appointmentComplete = async(req,res)=>{

    try {

        const {docId,appointmentId} =req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {

            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted : true})
            return res.json({success:true,message:'Appointment Completed'})
        }
        else{
            return res.json({success:false,message:'Mark Failed'})
        }
        
    
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    
    }
}


// API to mark Appointment Cancelled for Doctor Panel
const appointmentCancelled = async(req,res)=>{

    try {

        const {docId,appointmentId} =req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {

            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled : true})
            return res.json({success:true,message:'Appointment Cancelled'})
        }
        else{
            return res.json({success:false,message:'Cancellation Failed'})
        }
        
    
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    
    }
}

    


export {changeAvailability,doctorList,loginDoctor,getDoctorAppointments,appointmentComplete,appointmentCancelled}

