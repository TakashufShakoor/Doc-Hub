import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from 'react-toastify'
import axios from 'axios'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { backendUrl, token } = useContext(AppContext)
  const [search, setsearch] = useState('')
  const [suggestions, setSuggestions] = useState([]);
  const [doctors, setdoctors] = useState([])
  const [loading1,setloading1] = useState(false)
  const [loading2,setloading2] = useState(false)
  const navigate = useNavigate()

  const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Hyderabad",
  "Sialkot",
  "Bahawalpur",
  "Sargodha",
  "Gujranwala",
  "Gujrat",
  "Sukkur",
  "Larkana",
  "Sheikhupura",
  "Mirpur",
  "Dera Ghazi Khan",
  "Abbottabad",
  "Mardan",
  "Swat",
  "Kohat",
  "Bannu",
  "Jhelum",
  "Rahim Yar Khan",
  "Chiniot",
  "Okara",
  "Muzaffargarh",
  "Vehari",
  "Kasur",
  "Nawabshah",
  "Tando Adam",
  "Dadu",
  "Gilgit",
  "Skardu",
  "Khairpur",
  "Mingora",
  "Jacobabad",
  "Turbat",
  "Zhob",
  "Gwadar",
  "Attock",
  "Mansehra",
  "Chakwal",
  "Nowshera",
  "Hafizabad",
  "Khanewal",
  "Tando Allahyar",
  "Kharian"
];;

  const clearSearchDoctors = ()=>{
    setsearch('')
    setdoctors([])
    localStorage.removeItem('nearbyDoctors')

  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setsearch(value);
    const filtered = cities.filter(city =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const selectSuggestion = (value) => {
    setsearch(value);
    setSuggestions([]);
  };


  //----------------------------------------------//

  const handleSearchBar = async () => {

    if (!token) {
      toast.warning('Log In To Find Nearby Doctors')
      return;
    }

    setloading2(true)

    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/search_bar-doctors',
        { search },
        { headers: { token } }
      );

      if (data.success) {
        setloading2(false)
        setdoctors(data.doctors)
        localStorage.setItem("nearbyDoctors", JSON.stringify(data.doctors));
      }
       else {
        setloading2(false)
        toast.error("No doctors found.");
      }
    } catch (error) {
      setloading2(false)
      console.error("Error fetching doctors:", error);
    }
  };

  //--------------------------------------------------------------------------------//

  const handleSearchButton = () => {
    if (!token) {
      toast.warning('Log In To Find Nearby Doctors')
      return;
    }

    setloading1(true)
    

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const { data } = await axios.post(
            backendUrl + '/api/user/search-doctors',
            { latitude, longitude },
            { headers: { token } }
          );

          if (data.success) {
            setloading1(false)
            setdoctors(data.doctors)
            localStorage.setItem("nearbyDoctors", JSON.stringify(data.doctors));
          }

          else{
            setloading1(false)
            toast.error(data.message)
          }
        } catch (error) {
          setloading1(false)
          console.error("Error fetching doctors:", error);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  };

  useEffect(() => {
    const cached = localStorage.getItem("nearbyDoctors");
    if (cached) {
      setdoctors(JSON.parse(cached));
    }
  }, [token]);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Search Nearby Doctors</h1>

      <div className='relative flex justify-center w-full md:w-2/3 gap-2 mt-10'>
        <input
          onChange={handleInputChange}
          value={search}
          className='text-base w-2/3 md:w-1/2 px-5 h-12 rounded-full border border-gray-300 outline-none text-gray-800'
          type="search"
          placeholder='Search Nearby Doctors e.g City'
        />
        
        
        {loading2 ? <span className="animate-spin border-2 border-primary border-t-transparent rounded-full w-12 h-12"></span> : <button onClick={handleSearchBar} className='w-12 h-12 text-gray-800 text-5xl'><CiSearch className='hover:text-primary' /></button>}
        {loading1 ? <span className="animate-spin border-2 border-primary border-t-transparent rounded-full w-12 h-12"></span> : <button onClick={handleSearchButton} className='w-12 h-12 text-white text-2xl bg-primary rounded-full px-3 hover:bg-primary/60'><FaLocationDot /></button>}
        

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full  mt-1 left-[150px]  w-2/3 md:w-1/2 bg-white border border-gray-300 rounded shadow z-10">
            {suggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => selectSuggestion(city)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {doctors.length > 0 && (
        <div className='flex flex-col sm:flex-row w-full items-center justify-center  mt-10'>
        <p className='sm:w-1/3  text-center text-md'>Here are the doctors available near your current location:</p>
        <button onClick={clearSearchDoctors} className='bg-primary text-white px-2 py-1 text-xs rounded-full font-light block'>Clear</button>
        </div>
      )}
      
      
      <div className='w-full grid md:grid-cols-auto grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        
        {doctors.map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className='border border-[#C0E3FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img className='bg-[#C0E3FF]' src={item.image} alt="" />
            <div className='p-4'>
              {item.available ? (
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
              ) : (
                <div className='flex items-center gap-2 text-sm text-center text-gray-400'>
                  <p className='w-2 h-2 bg-gray-400 rounded-full'></p><p>Unavailable</p>
                </div>
              )}
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
              <div className='flex items-center gap-2'>
                <img className='w-4' src={assets.address} alt="" />
                <p className='text-gray-600 text-sm'>{item.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
