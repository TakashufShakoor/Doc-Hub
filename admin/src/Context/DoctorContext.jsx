import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props)=> {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [dtoken,setdtoken] = useState(localStorage.getItem('dtoken') ? localStorage.getItem('dtoken') : '')
    const [appointments,setappointments] = useState([])



    const getDoctorAppointments  = async() =>{
        try {
           const {data} = await axios.get(backendUrl + '/api/doctor/appointments',{headers:{dtoken}}) 

           if (data.success) {
            setappointments(data.appointments.reverse())
            
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

    const appointmentComplete = async(appointmentId)=>{
        let confirmCompletion = confirm(" ✅ Are you sure you want to Complete this appointment?")
        if(confirmCompletion){
            const toast2 = toast.loading("Please Wait ...")
            try {
            const {data} = await axios.post(backendUrl + '/api/doctor/appointment-complete',{appointmentId},{headers:{dtoken}})
            if (data.success) {
                toast.dismiss(toast2)
                toast.success(data.message)
                getDoctorAppointments()
            }
        } catch (error) {
            console.log(error);
            toast.dismiss(toast2)
            toast.error(error.message)
        }
        }
        
    }


     const appointmentCancel = async(appointmentId)=>{
        let confirmCancellation = confirm("❌ Are you sure you want to cancel this appointment?")
        if (confirmCancellation) {
            const toast1 = toast.loading("Cancelling ...")
             try {
                const {data} = await axios.post(backendUrl + '/api/doctor/appointment-cancel',{appointmentId},{headers:{dtoken}})

              if (data.success) {
                toast.dismiss(toast1)
                toast.success(data.message)
                getDoctorAppointments()
               }
            } catch (error) {
              console.log(error);
              toast.dismiss(toast1)
              toast.error(error.message)
              }
        }

    }
       








    const  value = {
         dtoken,setdtoken,backendUrl,appointments,setappointments,getDoctorAppointments,appointmentComplete,appointmentCancel
    }

    return(
        <DoctorContext.Provider value= {value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider