import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../Context/DoctorContext'

const Navbar = () => {

  const {atoken,setatoken} = useContext(AdminContext)
  const {dtoken,setdtoken} = useContext(DoctorContext)
  const navigate = useNavigate()

  const Logout = () => {
    navigate('/')
    atoken && setatoken('') || dtoken && setdtoken('')
    atoken && localStorage.removeItem('atoken') || dtoken && localStorage.removeItem('dtoken')
  }


  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0'>

      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-300  text-gray-500'>{atoken ? 'Admin Panel' : 'Doctor Panel'}</p>
      </div>

      <button onClick={Logout} className='bg-red-500 hover:bg-red-400 text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>


    </div>
  )
}

export default Navbar
