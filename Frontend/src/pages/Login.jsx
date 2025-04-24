import React, { useState } from 'react'

const Login = () => {

  const[state,setstate] = useState('Sign Up')

  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[name,setname] = useState('')

  const OnSubmitHandler = async(e)=>{
    e.preventDefault();
    console.log(`Name : ${name}`)
    console.log(`Email : ${email}`)
    console.log(`Password : ${password}`)
    
  }



  return (
    <form onSubmit={OnSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col m-auto gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Create Account" : "Login"} to Book Appointment</p>

        {state === 'Sign Up' &&  
        <div className="w-full">
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.value)}  name='fullname' required />
        </div>}
        
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.value)} name='email' required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=>setpassword(e.target.value)} name='password' required  />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
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
