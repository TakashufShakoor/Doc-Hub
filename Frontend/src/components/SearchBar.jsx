import React from 'react'
import { assets } from '../assets/assets'
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';

const SearchBar = () => {



  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Search Nearby Doctors</h1>

      <div className='flex justify-center  w-full md:w-2/3  gap-2  mt-10 '>
        <input className='text-base w-2/3 md:w-1/2  px-5 h-12  rounded-full border border-gray-300 outline-none text-gray-800 ' type="search" name="" id="" placeholder='Search Nearby Doctors e.g Location' />
        <button className=' w-12 h-12 text-gray-800 text-5xl  ' type="submit"><CiSearch /></button>
        <button  className=' w-12 h-12 text-white text-2xl bg-primary rounded-full px-3  ' type="submit"><FaLocationDot /></button>
       
        
        
    </div>

    </div >
  )
}

export default SearchBar
