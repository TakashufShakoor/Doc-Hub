import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';


const MyAppointments = () => {

  const navigate = useNavigate()

  const{backendUrl, token,getDoctorsData} = useContext(AppContext)
  const [appointments,setappointments] = useState([])
  const months = ["","January","February","March","April","May","June","July","August","September","October","November","December"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async ()=> {
    try {
 
          const {data} = await axios.get(backendUrl + '/api/user/appointments',{headers:{token}})

          if (data.success) {
            setappointments(data.appointments.reverse())
            console.log(data.appointments);
            
          }
         

    } catch (error) {

      console.log(error);
      toast.error(error.message)

    }
  }


  const cancelAppointment = async(appointmentId) =>{
    let confirmCancellation = confirm("❌ Are you sure you want to cancel this appointment?")
    if (confirmCancellation) {
      try {
      const toastId1 = toast.loading("Cancelling , Please wait...");

      const{data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId},{headers:{token}})

      if (data.success) {
        toast.dismiss(toastId1)
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      }

      else{
        toast.dismiss(toastId1)
        toast.error(data.message)
      }



    } catch (error) {
      toast.dismiss(toastId1)
      console.log(error);
      toast.error(error.message)
    }
    }
  }


  const makePayment = async(appointmentId)=> {
    try {
      toast.loading('Redirecting to Payment Page')

      const stripe = await loadStripe('pk_test_51RSctYQ11KdDBfvGqnmmC8pYIIlQHrNZRxYxyUQXID8vb45ve1gZDgL8RwLLZJixu7oQR1lMzUPcUY53RwstgV5400wO4ARSJA');

      const {data} = await axios.post(backendUrl + '/api/user/payment',{appointmentId},{headers:{token}})
      
      const result = stripe.redirectToCheckout({
        sessionId : data.id
      });


      if(result.error){

        console.log(error.message);
        
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }



  

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const appointmentID = params.get("appointment_Id");

  const verifyPayment = async () => {
    try {
      if (appointmentID) {
        const { data } = await axios.post(
          backendUrl + '/api/user/verify-payment',
          { appointmentID },
          { headers: { token } }
        );

        if (data.success) {
          toast.success(data.message);
          getUserAppointments();

          // Optional: Remove query param after showing toast
          window.history.replaceState({}, document.title, '/my-appointments');
        }

        
    if (params.get('cancelled') === 'true') {
      toast.error('Payment Failed.');
      
      // Optional: remove query param after showing toast
      window.history.replaceState({}, document.title, '/my-appointments');
    }

      }
    } 
    
    catch (error) {
      toast.error("Payment verification failed");
      console.error("Verify Payment Error:", error);
    }
  };

  verifyPayment();
}, []);
    



  
  
  

  


  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])


  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>

      <div>
        {appointments.map((item,index)=>(

          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b ' key={index}>
            <div onClick={() => {navigate(`/appointment/${item.docId}`); scrollTo(0,0)}} className='cursor-pointer   '>
              <img className=' w-32 bg-[#c0e3ff]' src={item.docData.image} alt="" />
            </div>

            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinnc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium '>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
              <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium '>Fees:</span> {`Rs. ${item.amount}`}</p>
            </div>
            
            <div></div>
            
            <div className='flex flex-col gap-2 justify-end'>
             {!item.cancelled && item.payment && <button className='sm:min-w-48 py-2 border rounded text-gray-600  bg-[#C0E3FF]'>✔ Paid</button>}
             {!item.cancelled && !item.payment && <button onClick={()=>makePayment(item._id)}  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button> }
             {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment </button>} 
             {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled ✘</button>}
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default MyAppointments
