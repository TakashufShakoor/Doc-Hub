import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets.js"
import { AdminContext } from '../Context/AdminContext.jsx'
import axios from 'axios'
 import { ToastContainer, toast } from 'react-toastify';
import { DoctorContext } from '../Context/DoctorContext.jsx';
  

const Login = () => {


    const {setatoken,backendUrl} = useContext(AdminContext)
    const {setdtoken} = useContext(DoctorContext)

    const [State,setState] = useState('Admin')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')




    const OnSubmitHandler = async (event)=> {
      event.preventDefault()


      try {
        
        if (State==='Admin') {
          const{data} = await axios.post(backendUrl + '/api/admin/login',{email,password})

          if (data.success) {
            toast.success(data.message)
            localStorage.setItem('atoken',data.token )
            setatoken(data.token);
          }

          else{
            toast.error(data.message)
          }

        }

        else{

          const{data} = await axios.post(backendUrl + '/api/doctor/login',{email,password})

          if (data.success) {
            localStorage.setItem('dtoken',data.token )
            setdtoken(data.token);
          }

          else{
            toast.error(data.message)
          }

        }
        
        
      } 
      
      catch (error) {
          console.log(error);
          
      }
    }



  return (
    
    <form onSubmit={OnSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-xl text-[#5e5e5e] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{State}</span> Login</p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e)=>setemail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email"  required/>
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e)=>setpassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password"  required/>
        </div>
      
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          State==='Admin' ?
          <p>Doctor Login ? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}>Click Here</span></p>
          :
          <p>Admin Login ? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}>Click Here</span></p>
        }
    

      </div>
    </form>
  )
}

export default Login
