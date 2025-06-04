import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { assets } from '../../assets/assets'

const AllAppointments = () => {

  const {appointments,getAllAppointments,atoken,cancelAppointment} = useContext(AdminContext)
  const {calculateAge,slotDateFormat} = useContext(AppContext) 

  useEffect(()=>{
    if (atoken) {
      getAllAppointments()
    }
   },[atoken])

  


  return atoken && (
    <div className='w-full max-w-6xl m-5'>
     
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border border-gray-200 shadow-md rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        <div className='hidden  sm:grid sm:grid-cols-[0.5fr_4fr_1fr_4fr_4fr_2fr_2fr_2fr_2fr] grid-flow-col py-3 px-6 border-b border-gray-300'>
          
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Type</p>
          <p>Payment</p>
          <p>Actions</p>
          

        </div>

        {appointments.map((item,index)=>(
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_4fr_1fr_4fr_4fr_2fr_2fr_2fr_2fr] items-center text-gray-500 py-3 px-6 border-b border-gray-300 hover:bg-gray-50' key={index}>

            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 rounded-full' src={item.userData.image} alt="" /><p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)} - {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 rounded-full bg-gray-200' src={item.docData.image} alt="" /><p>{item.docData.name}</p>
            </div>
            <p>Rs.{item.docData.fees}</p>
            <div>
              <p className='text-xs inline border border-gray-300  px-2 rounded-full'>{item.appointmentType}</p>
            </div>
            
            {item.payment
             ? <div> <p className=' text-green-500 text-xs font-semibold inline border border-gray-300  px-2 rounded-full '>Paid</p></div>
             :
               <div><p className='text-red-400 text-xs font-medium inline border border-gray-300  px-2 rounded-full'> Unpaid</p></div>
            }
            

             {item.cancelled
             ?
             <p className='text-red-400 text-xs font-medium'>✘ Cancelled </p>
             :
             item.isCompleted ?
             <p className='text-green-500 text-xs font-medium'>✔ Completed</p>
             :
             <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            }

            
          </div>
        ))}



      </div>
    </div>
  )
}

export default AllAppointments
