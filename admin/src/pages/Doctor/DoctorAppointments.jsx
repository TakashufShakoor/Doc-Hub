import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../Context/DoctorContext'
import { AppContext } from '../../Context/AppContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const DoctorAppointments = () => {

  const{dtoken,appointments,getDoctorAppointments,appointmentCancel,appointmentComplete} = useContext(DoctorContext)
  const{calculateAge,slotDateFormat} = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if (dtoken) {
      getDoctorAppointments()
    }
  },[dtoken])


  return dtoken && (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border border-gray-200 shadow-lg rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll'>

        <div className='max-sm:hidden  grid grid-cols-[0.5fr_3fr_2fr_2fr_1fr_3fr_2fr_2fr_0.5fr] gap-1 py-3 px-6 border-b border-gray-300'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Type</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {
          appointments.reverse().map((item,index)=>(
            <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_3fr_2fr_2fr_1fr_3fr_2fr_2fr_0.5fr] gap-1 items-center text-gray-500 py-3 px-6 border-b border-gray-200 hover:bg-gray-50' key={index}>
              <p className='max-sm:hidden'>{index+1}</p>
              <div className='flex items-center gap-2'>
                <img className='w-8 rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
              </div>
              
              <div>
                <p className={`text-xs inline border  px-2 rounded-full ${item.payment ? 'border-green-500' : 'border-red-300'}`}>
                  {item.payment ? 'Paid' : 'Unpaid'}
                </p>
              </div>
              <div>
              <p className='text-xs inline border border-gray-300  px-2 rounded-full'>{item.appointmentType}</p>
              </div>
              <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} - {item.slotTime} </p>
              <p>Rs.{item.amount}</p>
              {
                item.cancelled ?
                <p className='text-red-400 text-xs font-medium'>Cancelled ✘ </p>
                :
                item.isCompleted ?
                <p className='text-green-500 text-xs font-medium'>Completed ✔ </p>
                :
                <div className='flex lg:flex-row flex-col gap-1 items-start justify-start'>
                  
                <img onClick={()=>appointmentCancel(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                <img onClick={()=>appointmentComplete(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
                
                </div>

              }
              {
                !item.isCompleted && !item.cancelled &&
              <div className={`w-9 h-9 rounded-full  pl-1.5 pt-1.5 border border-primary  ${item.appointmentType === 'In-Person' ? 'hidden' : ''}`}>
                  <img onClick={() => window.open(`https://doc-hub-p1k4.vercel.app/video_room/${item._id}`, '_blank')} className='w-6 cursor-pointer' src={assets.video_icon} alt="" />
              </div>
              }
              

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default DoctorAppointments
