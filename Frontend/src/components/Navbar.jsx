import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const Navbar = () => {
  

  
    const navigate= useNavigate();
    const[showmenu,setshowmenu]=useState(false); 

    const{token,settoken,userData,setuserData} = useContext(AppContext)

    



    const logout = ()=>{
      settoken('');
      localStorage.removeItem('token');
      navigate('/')
    }
    



  return (
    <div className='flex items-center justify-between text-sm  py-4 mb-5 border-b border-b-gray-400 sticky top-0 z-50 bg-white'>
      <NavLink to='/' onClick={()=>scrollTo(0,0)}>
      <img className='w-44  cursor-pointer ' src={assets.logo} alt=""  />
      </NavLink>

      <ul className='hidden lg:flex items-start gap-5 font-medium'>
        <NavLink to='/' onClick={()=>scrollTo(0,0)} >
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' onClick={()=>scrollTo(0,0)}>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' onClick={()=>scrollTo(0,0)}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' onClick={()=>scrollTo(0,0)}>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      
      
      <div className='flex items-center gap-4'>
        <button onClick={()=>navigate('/')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden lg:block'>Join as Doctor</button>
        {

            token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 h-8 rounded-full' src={userData.image} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :
            <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden lg:block'>Join as Patient</button>

        }
        <img onClick={()=>setshowmenu(true)} className='w-6 lg:hidden' src={assets.menu_icon} alt="" />

        {/*-----------Mobile Menu-----------*/}
        <div className={`${showmenu ? 'fixed w-full' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>

          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setshowmenu(false)} src={assets.cross_icon} alt="" />
          </div>

          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink  onClick={()=>setshowmenu(false)} to='/'><p className='px-4 py-2 rounded inline-block' >HOME</p></NavLink>
            <NavLink  onClick={()=>setshowmenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink  onClick={()=>setshowmenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink  onClick={()=>setshowmenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          
           {/* <div className='bg-primary text-white' >
            <NavLink onClick={()=>setshowmenu(false)}  to='/login'><p className='px-4 py-2 rounded inline-block'>Join as Patient</p></NavLink>
            <NavLink onClick={()=>setshowmenu(false)}  to=''><p className='px-4 py-2 rounded inline-block'>Join as Doctor</p></NavLink>
           </div> */}
          </ul>

        </div>
        
      </div>
    </div>
  )
}

export default Navbar
