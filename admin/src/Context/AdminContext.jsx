import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props)=> {
    const [atoken,setatoken] = useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : '')
    const [doctors,setdoctors] = useState([])
    const [appointments,setappointments] = useState([])
    const [dashData,setdashData] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async ()=>{
        try {
            const{data} = await axios.post(backendUrl + '/api/admin/all-doctors',{},{headers:{atoken}})
            if (data.success) {
                setdoctors(data.doctors)
                console.log(data.doctors);
                
            }
            else{
                toast.error(data.message)
            }
        } 
        
        catch (error) {
            toast.error(error.message)
        }
    }

 const changeAvailability = async (docId)=>{
    try {
        const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{atoken}})
        if (data.success) {
            toast.success(data.message)
            getAllDoctors()
        }
        else{
            toast.error(data.message)
        }
    } 
    
    catch (error) {
        toast.error(error.message)
    }
 } 


 const getAllAppointments = async()=>{
     try {
            const{data} = await axios.get(backendUrl + '/api/admin/appointments',{headers:{atoken}})

            if (data.success) {
                setappointments(data.appointments)
                console.log(data.appointments);
                
            }
            else{
                toast.error(data.message)
            }
        } 
        
        catch (error) {
            toast.error(error.message)
            
            
        }
 }

 const cancelAppointment = async(appointmentId) =>{
     let confirmCancellation = confirm("❌ Are you sure you want to cancel this appointment?")
     if (confirmCancellation) {
        
    try {
        const toastid = toast.loading('Cancelling Appointment')
        const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment',{appointmentId},{headers:{atoken}})
        
        if (data.success) {
                toast.dismiss(toastid)
                toast.success(data.message)
                getAllAppointments();
                getDashData()
                
            }
            else{
                toast.dismiss(toastid)
                toast.error(data.message)
            }


    } catch (error) {
       toast.error(error.message)  
    }
 }
}


const getDashData = async() =>{
    try {

        const{data} = await axios.get(backendUrl + '/api/admin/admin-dashboard',{headers:{atoken}})

        if(data.success){
            setdashData(data.dashData)
        }
        else{
            toast.error(data.message)
        }


    } catch (error) {
        toast.error(error.message)  
        }
}



    const  value = {
        atoken,setatoken,backendUrl,doctors,getAllDoctors,changeAvailability,getAllAppointments,appointments,setappointments,cancelAppointment,getDashData,dashData
    }

    return(
        <AdminContext.Provider value= {value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider