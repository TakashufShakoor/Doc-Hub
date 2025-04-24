import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col  md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/*--------------------Left Side-----------------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Revolutionize Your <br /> Healthcare with AI-Driven <br /> Doctor Consultations</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-18' src={assets.ai_icon} alt="" />
            <p>Experience fast, accurate, and personalized medical advice <br className='hidden sm:block' /> from our AI doctor. Get instant health assessments and <br className='hidden sm:block' /> tailored recommendations anytime, anywhere.</p>
        </div>
        <NavLink to='/ai_consultation'><a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105  transition-all duration-300' href="">
        Get Instant AI Advice  <img className='w-3' src={assets.arrow_icon} alt="" />
        </a></NavLink>

      </div>

      {/*--------------------Right Side-----------------*/}
      <div className='md:w-1/2 relative md:py-[9.35vw] md:mb-[-30px]'>

        <img className='w-full md:absolute b-0 h-auto rounded-lg ' src={assets.header_img2} alt="" />

      </div>
    </div>
  )
}

export default Header
