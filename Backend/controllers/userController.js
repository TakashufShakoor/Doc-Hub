import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import stripe from '../config/stripe.js'
import { geocodeAddress } from '../config/geoCode.js'
import transporter from '../config/mailer.js'





// API to register user

const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        if (!name || !password || !email) {
            return res.json({success:false, message:'Missing Details'})
        }

        // Checking the email format 
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:'Enter a Valid Email'})
        }

        // Validating Strong password
        if (password.length < 8) {
            return res.json({ success: false, message: 'Please enter a strong password Minimum 8 characters' })
        
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

    
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)

        res.json({ success: true,message:'Registration Successful',token })


    } 
    
    
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// API for User Login

const loginUser = async (req,res) => {

    try {

        const {email,password} = req.body
        const User = await userModel.findOne({email})

        if (!User) {
          return res.json({success:false, message:'User Does Not Exist'})
        }

        const isMatch = await bcrypt.compare(password,User.password)
        

        if (isMatch) {

            const token = jwt.sign({id: User._id},process.env.JWT_SECRET)
            return res.json({success:true ,message:"Logged In",token})

        }

        else{
              return res.json({success:false, message: "Invalid Password"})
        }

    } catch (error) {
       console.log(error);
        res.json({ success: false, message: error.message }) 
    }
} 


// API to get user profile data

const getProfile = async(req,res)=>{
    try {

        const{userId} = req.body
        const userData = await userModel.findById(userId).select('-password')
        return res.json({success:true,userData})

    } 
    
    
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}





// API to Update user profile data

const updateProfile = async(req,res)=>{
    try {

        const{userId,name,phone,address,dob,gender} = req.body
        const imageFile = req.file

        if (!name || !phone || !address || !dob || !gender ) {
            return res.json({success:false , message: 'Data Missing'})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address : JSON.parse(address),dob,gender})

        if(imageFile){

            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'})
            const imageURL = imageUpload.secure_url
            await userModel.findByIdAndUpdate(userId,{"image" : imageURL})

        }

        res.json({success:true , message: 'Profile Updated'})


        

    } 
    
    
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}



// API to Book Appointment

const bookAppointment = async (req,res)=> {
    try {

        const { userId, docId, slotDate, slotTime,appointmentType } = req.body
        const docData = await doctorModel.findById(docId).select('-password')

        if (!docData.available) {
            return res.json({success : false, message: 'Doctor Not Available'})
        }

        let slots_booked = docData.slots_booked

        //Checking Slot Availability
        if(slots_booked[slotDate]){
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({success : false, message: 'Slot Not Available'})
            }
            else{
                slots_booked[slotDate].push(slotTime)
            }
        }
        else{
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }


        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now(),
            appointmentType
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        // Save New Slots data in docData

        await doctorModel.findByIdAndUpdate(docId,{slots_booked})
        res.json({success: true, message: 'Appointment Booked'})


        




    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}



// API to get user appointments for frontend My Appointment Page
const listAppointment = async (req,res) => {

    try {
        const {userId} = req.body;
        const appointments = await appointmentModel.find({userId})

        res.json({success:true, appointments})
        



    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// API to cancel Appointment
const cancelAppointment = async (req,res)=>{
    try {

        const {userId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        //Verify Appointment User
        if (appointmentData.userId!==userId) {
            return res.json({success:false, message:'Unauthorized Action'})
        }
        
        await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

        // Releasing Doctor Slot

        const {docId,slotDate,slotTime} = appointmentData
        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e!==slotTime)

        await doctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true, message:'Appointment Cancellled'})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// API to search Nearby Doctors
const nearbyDoctors = async(req,res)=>{

    try {
        const{latitude,longitude} = req.body

        const doctors = await doctorModel.find({location: {$near: {$geometry: {type: "Point",coordinates: [longitude, latitude]},$maxDistance: 15000  }}});
        res.json({success:true,doctors})
    }
    
    catch (error) {
         console.log(error);
         res.json({ success: false, message: error.message })
    }
    

}



// API to search Nearby Doctors through searchbar
const searchNearbyDoctors = async(req,res)=>{

    try {
        const{search} = req.body

        const loc1 = await geocodeAddress(search);



        const doctors = await doctorModel.find({location: {$near: {$geometry: {type: "Point",coordinates: [loc1.lng, loc1.lat]},$maxDistance: 50000  }}});
        res.json({success:true,doctors})
    }
    
    catch (error) {
         console.log(error);
         res.json({ success: false, message: error.message })
    }
    

}

//-----------------------------------------------Payment Gateway -------------------------------------------------------------------------


const stripePayment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res.json({ success: false, message: 'Appointment not found' });
    }

    const lineItems = [
      {
        price_data: {
          currency: 'pkr',
          product_data: {
            name: `${appointmentData.docData.name} (${appointmentData.docData.speciality})`,
            description: `Appointment on ${appointmentData.slotDate} at ${appointmentData.slotTime}`,
            images: [appointmentData.docData.image], // Stripe expects an array of image URLs
          },
          unit_amount: appointmentData.docData.fees * 100, // in smallest currency unit
        },
        quantity: 1,
      }
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `https://doc-hub-production-260f.up.railway.app/my-appointments?appointment_Id=${appointmentId}`,
      cancel_url: 'https://doc-hub-production-260f.up.railway.app/my-appointments?canceled=true',

    // success_url: `http://localhost:5173/my-appointments?appointment_Id=${appointmentId}`,
    // cancel_url: 'http://localhost:5173/my-appointments?canceled=true',


    });

    res.json({ success: true, id: session.id });

  } catch (error) {
    console.error('Stripe Payment Error:', error);
    res.json({ success: false, message: error.message });
  }
};


const verifyPayment = async(req,res)=>{
    try {
        const {appointmentID} = req.body
        await appointmentModel.findByIdAndUpdate(appointmentID,{payment:true});
        res.json({success:true,message:"Payment Successful"})

    } catch (error) {
        console.error( error);
        res.json({ success: false, message: error.message });
    }
   
};

//----------------------------------------Join Doctor------------------//

const joinDoctor = async(req,res)=> {

        
        const {name,email,contact,experience,fees,about,speciality,degree,address} = req.body
        

        
        // Checking for all data to add doctor
        if (!name || !email || !contact || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: 'Missing Details' })
        }
        
        // Checking the email format 
        if (!validator.isEmail(email)) {
            return  res.json({ success: false, message: 'Please enter a valid email' })
        }

        const mailOptions = {
            from: email,
            to: "70126984@student.uol.edu.pk",
            subject: "New Doctor Registration",
            html: `
            <h2>Doctor Form Submission</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Contact No:</b> ${contact}</p>
            <p><b>Speciality:</b> ${speciality}</p>
            <p><b>Experience:</b> ${experience}</p>
            <p><b>Degree:</b> ${degree}</p>
            <p><b>Address:</b> ${address}</p>
            <p><b>Fees:</b> ${fees}</p>
            <p><b>About:</b> ${about}</p>
          `,
        };

        try {

            await transporter.sendMail(mailOptions);
            res.json({success:true , message:'Submission Successful'})

        } 
        catch (error) {

            console.error("Email error:", error);
            res.json({success:false, message: error.message})

        }

        




}



export {registerUser,loginUser,getProfile,updateProfile,bookAppointment,listAppointment,cancelAppointment,stripePayment,verifyPayment,nearbyDoctors,searchNearbyDoctors,joinDoctor}