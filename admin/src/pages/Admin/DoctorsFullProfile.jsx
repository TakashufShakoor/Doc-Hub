import React, { useContext, useState,useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { useParams } from 'react-router-dom'

const DoctorsFullProfile = () => {

    const{doctors,getAllDoctors,atoken } = useContext(AdminContext)
    const { docId } = useParams()
    const[docInfo,setdocInfo] = useState(null)


    const fetchDocInfo = ()=>{
        const docData = doctors.find((doc)=>doc._id === docId)
        setdocInfo(docData)
      
    }




    useEffect(()=>{
        fetchDocInfo()
    },[])




    
    return atoken && docInfo && (

    <div className='m-10 w-full'>
      {/*------------------Doctor Details-----------------------*/}
      <div className='flex flex-col justify-between sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>



        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ' >
          {/*----------------Doctor Info (Name,Degree,Experience)----------*/}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-900'>{docInfo.name}</p>

          <div className='flex items-center gap-2 text-md mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className=' py-0.5 px-2 border  border-gray-400 text-sm  rounded-full'>{docInfo.experience}</button>
          </div>

          {/*---------------Doctor About------------*/}
          <div>
            <p className='flex items-center gap-1 text-lg font-medium text-gray-900 mt-3'>About </p>
            <p className='text-md text-gray-500 max-w-[700px] mt-1' >{docInfo.about}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-lg font-medium text-gray-900 mt-3'>Address </p>
            <p className='text-md text-gray-500 max-w-[700px] mt-1' >{docInfo.address}</p>
          </div>

          <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{docInfo.fees}</span></p>



        </div>
      </div>
    </div>
  )

}
    


    
  
  
export default DoctorsFullProfile
