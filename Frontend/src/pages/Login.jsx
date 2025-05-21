import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const {token,settoken,backendUrl} =useContext(AppContext)

  const[state,setstate] = useState('Log In')

  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[name,setname] = useState('')

  const OnSubmitHandler = async(e)=>{
    e.preventDefault();

    try {

      if (state === 'Sign Up') {

        const toastId1 = toast.loading("Creating Account, Please wait...");
        
        const{data} = await axios.post(backendUrl + '/api/user/register',{name,email,password})

        if (data.success) {
            toast.dismiss(toastId1)
            toast.success(data.message)
            localStorage.setItem('token',data.token )
            settoken(data.token);
            
            // reseting the input fields
            setname('')
            setemail('')
            setpassword('')
            setTimeout(()=>{
              setstate('Log In')
            },3000)

        
        }

        else{
          toast.dismiss(toastId1)
          toast.error(data.message)
        }


      }

      else{

      const toastId2 = toast.loading("Logging In, Please wait...");
        
       const{data} = await axios.post(backendUrl + '/api/user/login',{email,password})

        if (data.success) {
            toast.dismiss(toastId2)
            toast.success(data.message)
            localStorage.setItem('token',data.token )
            settoken(data.token);

            // reseting the input fields
            setemail('')
            setpassword('')
            
            


        }

        else{
          toast.dismiss(toastId2)
          toast.error(data.message)
        }
      }




      
    } catch (error) {
      toast.error(error.message)
    }
   
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])



  return (
    <form onSubmit={OnSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col m-auto gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Create Account" : "Login"} to Book Appointment</p>

        {state === 'Sign Up' &&  
        <div className="w-full">
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.value)} value={name}  name='fullname' required />
        </div>}
        
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.value)} value={email} name='email' required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=>setpassword(e.target.value)} value={password} name='password' required  />
        </div>
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up' ? 
          <p>Already have an account? <span  onClick={()=>setstate('Login')} className='text-primary  underline cursor-pointer'>Login Here</span></p>
          :
          <p>Create a new account ? <span onClick={()=>setstate('Sign Up')} className='text-primary underline cursor-pointer' >Click Here</span> </p>

        }
      </div>
      
    </form>
  )
}

export default Login
