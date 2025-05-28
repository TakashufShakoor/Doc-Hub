import React, { useContext, useState } from 'react'
import {AdminContext} from '../Context/AdminContext'
import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets'
import { DoctorContext } from '../Context/DoctorContext'

const Sidebar = () => {
  const{atoken} = useContext(AdminContext)
  const{dtoken} = useContext(DoctorContext)
  

  
  return (
    <div className='min-h-screen  bg-white border-r border-gray-200 shadow-sm' >
      {
        atoken && <ul className='text-[#515151] mt-5'>

          <NavLink to={'/admin-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink to={'/all-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>All Appointments</p>
          </NavLink>

          <NavLink to={'/add-doctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>

          <NavLink to={'/doctors-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Doctors List</p>
          </NavLink>
          
        </ul>
      }



      {
        dtoken && <ul className='text-[#515151] mt-5'>

          <NavLink to={'/doctor-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink to={'/doctor-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink to={'/doctor-profile'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#c0e3ff] border-r-4 border-primary' : ''}`}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
          
        </ul>
      }


    </div>
  )
}

export default Sidebar
