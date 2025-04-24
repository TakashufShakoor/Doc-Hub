import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doctors } from '../assets/assets'

const Doctors = () => {
  const { speciality } = useParams();
  
  const [filterDoc, setfilterDoc] = useState([]);
  const [showFilter,setshowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else  {
      setfilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter() 
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setshowFilter(!showFilter)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="General physician" ? "bg-[#C0E3FF]" : ""}`}>General physician</p>
          <p onClick={()=> speciality==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="Gynecologist" ? "bg-[#C0E3FF]" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="Dermatologist" ? "bg-[#C0E3FF]" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="Pediatricians" ? "bg-[#C0E3FF]" : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="Neurologist" ? "bg-[#C0E3FF]" : ""}`}>Neurologist</p>
          <p onClick={()=> speciality==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray rounded  cursor-pointer ${speciality==="Gastroenterologist" ? "bg-[#C0E3FF]" : ""}`}>Gastroenterologist</p>
        </div>

        <div className='w-full grid md:grid-cols-auto grid-cols-2 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-[#C0E3FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-[#C0E3FF] ' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>


            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
