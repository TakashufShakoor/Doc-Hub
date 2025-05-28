import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const DoctorsList = () => {
  const{doctors,atoken,getAllDoctors,changeAvailability,deleteDoctor} = useContext(AdminContext)

  const navigate = useNavigate()
  
  useEffect(()=>{
    if (atoken) {
      getAllDoctors()
    }
  },[atoken])


  return (
    <div className='m-5  max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item,index)=>(
            <div  className='mb-8 border border-[#c0e3ff] rounded-xl max-w-56  overflow-hidden  group' key={index}>
              <img onClick={() => {navigate(`/doctors-list/${item._id}`); scrollTo(0,0)}} className='bg-[#c0e3ff] group-hover:bg-primary transition-all cursor-pointer duration-500' src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm '>{item.speciality}</p>
                <div className='mt-2 flex items-center justify-between gap-1 text-sm  '>
                  <div className='mt-2 flex items-center  gap-1 text-sm cursor-pointer'>
                  <input className='cursor-pointer' onChange={()=>changeAvailability(item._id)} type="checkbox"  checked={item.available} />
                  <p>Available</p>
                  </div>
                  <div className='flex items-center mt-2'>
                  <img onClick={()=>deleteDoctor(item._id)} className='w-4 cursor-pointer ' src={assets.minus_button} alt="" />
                  </div>
                </div>
              
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
