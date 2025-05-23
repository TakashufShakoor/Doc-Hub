import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'



export const AppContext = createContext();

const AppContextProvider = (props) => {


    const currencySymbol = 'Rs '
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [token,settoken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [doctors,setdoctors] = useState([])
    const [userData,setuserData] = useState(false)

    const getDoctorsData = async ()=> {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setdoctors(data.doctors)
            }
            else{
                toast.error(data.message)
            }

        } 
        
        catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    const loadUserProfileData = async(req,res) =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})

            if (data.success) {
                setuserData(data.userData)
            }

            else{
                toast.error(data.message)
            }
        } 
        
        
        catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const value = {
        doctors,getDoctorsData,currencySymbol,token,settoken,backendUrl,userData,setuserData,loadUserProfileData
    }

     

    useEffect(()=>{
        getDoctorsData()
     },[])


    useEffect(()=>{
        if (token) {
            loadUserProfileData()
        }
        else{
            setuserData(false)
        }
    },[token]) 





    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider