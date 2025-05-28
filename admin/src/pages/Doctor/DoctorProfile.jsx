import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../Context/DoctorContext'
import { AppContext } from '../../Context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'



const DoctorProfile = () => {
  const [isEdit,setisEdit] = useState(false)
  const {dtoken,doctorProfileData,setdoctorProfileData,getProfileData,backendUrl} = useContext(DoctorContext)


  const updateProfile = async()=>{

    try {

      const updateData = {
        address:doctorProfileData.address,
        fees: doctorProfileData.fees,
        available : doctorProfileData.available
      }

       const {data} = await axios.post(backendUrl + '/api/doctor/update-profile',updateData,{headers:{dtoken}})

            if(data.success){
                toast.success(data.message)
                setisEdit(false)
                getProfileData()
            }
            else{
                toast.error(data.message)
            }  

    } catch (error) {
      console.log(error);
            toast.error(error.message)
    }
  }




  useEffect(()=>{
    if(dtoken){
      getProfileData()
    }
  },[dtoken])

  return doctorProfileData && (
    <div>

      <div className='flex flex-col  gap-4 m-5'>

        <div>
          <img className='bg-primary w-full sm:max-w-64 rounded-lg' src={doctorProfileData.image} alt="" />
        </div>

        <div className='flex-1 border border-stone-200 shadow-md rounded-lg p-8 py-7 bg-white'>

          {/* DocInfo -------Name,Degree,Experience */}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{doctorProfileData.name}</p>

          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{doctorProfileData.degree} - {doctorProfileData.speciality}</p>
            <button className='py-0.5 px-2 border border-gray-400 text-xs rounded-full'>{doctorProfileData.experience}</button>
          </div>


          {/*----------------------- Doctor About---------------------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{doctorProfileData.about}</p>
          </div>

          <p className='text-gray-600 font-medium mt-4'>Appointment Fee:  <span className='text-gray-800'>Rs.{isEdit ? <input className='bg-gray-100' onChange={(e)=>setdoctorProfileData(prev =>({...prev,fees : e.target.value}))} type="number" value={doctorProfileData.fees} name="" id="" /> : doctorProfileData.fees}</span></p>

          <div className='flex gap-2 py-2'>

            <p>Address:</p>
            <p className='text-sm'>
              {isEdit ? <input className='bg-gray-100' onChange={(e)=>setdoctorProfileData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} value={doctorProfileData.address.line1} type="text" name="" id="" /> : doctorProfileData.address.line1} <br /> 
              {isEdit ? <input className='bg-gray-100' onChange={(e)=>setdoctorProfileData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} value={doctorProfileData.address.line2} type="text" name="" id="" /> : doctorProfileData.address.line2}
            </p>
            
          </div>

          <div className='flex gap-1 pt-2'>
            <input onChange={()=>isEdit && setdoctorProfileData(prev=>({...prev,available:!prev.available}))} checked={doctorProfileData.available} type="checkbox" name="" id="" />
            <label htmlFor="">Available</label>
          </div>

          {
            isEdit ?
            <button onClick={updateProfile} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
            :
             <button onClick={()=>setisEdit(true)} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
          }

         
          

        </div>

      </div>

    </div>
  )
}

export default DoctorProfile
