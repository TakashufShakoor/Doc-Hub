import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*------------Left Section----------*/}
                <div>
                    <img className='mb-5 w-40' src={assets.logo2} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leaading-6' >Welcome to Doc Hub, your trusted platform for seamless online consultations. Whether you need expert advice or personalized guidance, Doc Hub connects you with professionals in real time. Experience hassle-free consultations, all from the comfort of your device.</p>
                </div>



                {/*------------Center Section----------*/}
                <div>
                    <p className='text-xl font-medium mb-5' >IMPORTANT LINKS</p>
                    <ul className='flex flex-col gap-2 text-gray-600 '  >
                        <li onClick={() => { navigate('/'); scrollTo(0, 0) }} className='hover:text-gray-800 cursor-pointer' >Home</li>
                        <li onClick={() => { navigate('/about'); scrollTo(0, 0) }} className='hover:text-gray-800 cursor-pointer'>About Us</li>
                        <li onClick={() => { navigate('/contact'); scrollTo(0, 0) }} className='hover:text-gray-800 cursor-pointer'>Contact Us</li>
                        <li onClick={() => { navigate('/'); scrollTo(0, 0) }} className='hover:text-gray-800 cursor-pointer'>Privacy Policy</li>
                    </ul>

                </div>




                {/*------------Right Section----------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>70126984@student.uol.edu.pk</li>
                        <li>70127623@student.uol.edu.pk</li>
                    </ul>
                </div>
            </div>

            {/*---------------------Copyright Section----------------*/}
            <div>
                <hr />
                <p className='text-center text-sm py-5'>Copyright © 2024 Doc Hub - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer


