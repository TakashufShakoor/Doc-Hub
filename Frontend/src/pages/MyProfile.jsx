import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

  const {userData,setuserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)

  const [isEdit, setisEdit] = useState(false)
  const [image, setimage] = useState(false)



  const  updateUserProfileData = async(res,req)=>{
    try {

      const toastId = toast.loading("Updating Profile. Please wait...");




      const formdata = new FormData()

      formdata.append('name', userData.name)
      formdata.append('phone', userData.phone)
      formdata.append('address',JSON.stringify( userData.address))
      formdata.append('gender', userData.gender)
      formdata.append('dob', userData.dob)

      image && formdata.append('image',image)

      const{data} = await axios.post(backendUrl + '/api/user/update-profile',formdata,{headers:{token}})

      if (data.success) {
        toast.dismiss(toastId)
        toast.success(data.message)
        await loadUserProfileData()
        setisEdit(false)
        setimage(false)
      }

      else{
        toast.dismiss(toastId)
        toast.error(data.message)
      }



    } 
    
    catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }


  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      {
        isEdit ?
        <label htmlFor="image">
          <div className='inline-block relative cursor-pointer'>
            <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
          </div>
          <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image" hidden />
        </label>

        :

         <img className='w-36 rounded' src={userData.image} alt="" />

      }




     
      {
        isEdit ?
          <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e) => setuserData(prev => ({ ...prev, name: e.target.value }))} />
          :
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      {/*-----------------------------------------------------------------------------------------------------------------------------*/}

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>

        <div className='grid grid-cols-2 gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
              <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={(e) => setuserData(prev => ({ ...prev, phone: e.target.value }))} />
              :
              <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <p>
                <input className='bg-gray-100 ' value={userData.address.line1} onChange={(e) => setuserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} type="text" /><br />
                <input className='bg-gray-100 ' value={userData.address.line2} onChange={(e) => setuserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} type="text" />
              </p>
              :
              <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2} </p>
          }

        </div>
      </div>
      {/*------------------------------------------------------------------------------------------------------------------------------*/}
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>

        <div className='grid grid-cols-2 gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
              <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={(e) => setuserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              :
              <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-medium'>Birthday:</p>
          {
            isEdit ?
              <input className='max-w-28 bg-gray-100' value={userData.dob} onChange={(e) => setuserData(prev => ({ ...prev, dob: e.target.value }))} type="date" />
              :
              <p className='text-gray-400'>{userData.dob}</p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit ?
            <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all ' onClick={updateUserProfileData} >Save Information</button>
            :
            <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all ' onClick={() => setisEdit(true)} >Edit</button>
        }
      </div>


    </div>
  )
}

export default MyProfile
