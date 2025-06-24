import React,  {useContext, useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { AppContext } from '../context/AppContext'




const JoinAsDoctor = () => {

  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [experience,setexperience] = useState('')
  const [fees,setfees] = useState('')
  const [about,setabout] = useState('')
  const [speciality,setspeciality] = useState('')
  const [degree,setdegree] = useState('')
  const [address,setaddress] = useState('')
  const [contactNo,setcontactNo] = useState('')

  const{backendUrl} = useContext(AppContext);



 const OnSubmithandler = async (e)=>{
    e.preventDefault()

    const toastId = toast.loading("Submitting. Please wait...");
    
    try {

      const docInfo ={
        'name':name,
        'email':email,
        'experience':experience,
        'fees':fees,
        'about':about,
        'speciality':speciality,
        'degree':degree,
        'address':address,
        'contact':contactNo
      }


      const {data} = await axios.post(backendUrl + '/api/user/join_doctor',docInfo)

      if (data.success) {
        
        toast.dismiss(toastId)
        toast.success(data.message)

        // reseting the input fields
        setname('')
        setemail('')
        setfees('')
        setabout('')
        setdegree('')
        setaddress('')
        setcontactNo('')
        
      }

      else{
        
        toast.dismiss(toastId)
        toast.error(data.message)
        
      }



    } 
    catch (error) {
      toast.dismiss(toastId)
      toast.error(error.message)
      console.log(error);
      
    }

  }







  return (

    <div className='w-full flex  justify-center'>

    <form onSubmit={OnSubmithandler} className=' w-[90%]'>

          <p className='mb-3 mt-5 text-center text-xl font-medium text-white bg-primary'>Join As Doctor</p>
    
          <div className='bg-white mt-5 px-8 py-8 border border-gray-200 shadow-md rounded w-full  '>
    
    
            <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
    
              {/*--------------------Left Input Section---------------------------*/}
              <div className='w-full lg:flex-1 flex flex-col gap-4'>
    
                <div className='flex-1 flex flex-col gap-1' >
                  <p>Doctor Name</p>
                  <input onChange={(e)=>setname(e.target.value)} value={name} className='border border-[#dadada] rounded px-3 py-2' type="text" placeholder='Name' required />
                </div>
    
                 <div className='flex-1 flex flex-col gap-1'>
                  <p>Doctor Email</p>
                  <input onChange={(e)=>setemail(e.target.value)} value={email} className='border border-[#dadada] rounded px-3 py-2' type="Email" placeholder='Email' required />
                </div>

                <div className='flex-1 flex flex-col gap-1'>
                  <p>Doctor Contact</p>
                  <input onChange={(e)=>setcontactNo(e.target.value)} value={contactNo} className='border border-[#dadada] rounded px-3 py-2' type="tel" placeholder='Contact No:' required />
                </div>
    
    
                
    
                
                <div className='flex-1 flex flex-col gap-1'>
                  <p>Fees (Rupees)</p>
                  <input onChange={(e)=>setfees(e.target.value)} value={fees} className='border border-[#dadada] rounded px-3 py-2' type="number" placeholder='Fees' required />
                </div>
    
    
              </div>
    
    
    
              {/*--------------------Right Input Section---------------------------*/}
              <div className='w-full lg:flex-1 flex flex-col gap-4'>
    
                <div className='flex-1 flex flex-col gap-1'>
                  <p>Speciality</p>
                  <select onChange={(e)=>setspeciality(e.target.value)} value={speciality} className='border border-[#dadada] rounded px-3 py-2' name="" id="">
                    <option value="">Select</option>
                    <option value="General physician">General physician</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Radiologist">Radiologist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="ENT Specialist">ENT Specialist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                  </select>
                </div>

                <div className='flex-1 flex flex-col gap-1'>
                  <p>Experience</p>
                  <select onChange={(e)=>setexperience(e.target.value)} value={experience} className='border border-[#dadada] rounded px-3 py-2' name="" id="">
                    <option value="">Select</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5 Years">5 Years</option>
                    <option value="6 Years">6 Years</option>
                    <option value="7 Years">7 Years</option>
                    <option value="8 Years">8 Years</option>
                    <option value="9 Years">9 Years</option>
                    <option value="10 Years">10 Years</option>
                    <option value="11 Years">11 Years</option>
                    <option value="12 Years">12 Years</option>
                  </select> 
                </div>
    
                <div className='flex-1 flex flex-col gap-1'>
                  <p>Education</p>
                  <input onChange={(e)=>setdegree(e.target.value)} value={degree} className='border border-[#dadada] rounded px-3 py-2' type="text" placeholder='Education' required />
                </div>
    
                <div className='flex-1 flex flex-col gap-1'>
                  <p>Address</p>
                  <input onChange={(e)=>setaddress(e.target.value)} value={address} className='border border-[#dadada] rounded px-3 py-2' type="text" name="" placeholder='Address ' id="" />
                  
                </div>
    
              </div>
    
            </div>
    
            {/*--------------------Bottom Input Section------------------*/}
            
            <div>
                  <p className='mt-4 mb-2'>About Doctor</p>
                  <textarea onChange={(e)=>setabout(e.target.value)} value={about} className='w-full px-4 pt-2 border border-[#dadada] rounded '  placeholder='Write about doctor' rows={5} required />
            </div>
    
            <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Submit </button>
    
    
    
    
          </div>
        </form>
        </div>
  )
}

export default JoinAsDoctor
