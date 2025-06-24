import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AiConsultation from './pages/AiConsultation'
import { ToastContainer, toast } from 'react-toastify';
import VideoRoom from './pages/VideoRoom'
import JoinAsDoctor from './pages/JoinAsDoctor'


  


const App = () => {



  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>

      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/join_as_doctor' element={<JoinAsDoctor/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/ai_consultation' element={<AiConsultation/>}/>
        <Route path='/video_room/:appointmentId' element={<VideoRoom/>}/>
        

      </Routes>

      <Footer/>


    </div>
  )
}

export default App
