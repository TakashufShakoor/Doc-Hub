import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import Login from "./pages/Login";
import DoctorsFullProfile from "./pages/Admin/DoctorsFullProfile";
import { DoctorContext } from "./Context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";


const App = () => {
  const { atoken } = useContext(AdminContext);
  const {dtoken} = useContext(DoctorContext)

  return atoken || dtoken ? (
    <div>
      <Navbar/>
      
      <div className="flex items-start ">
        <Sidebar/>
        <ToastContainer />
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/all-appointments" element = {<AllAppointments/>}/>
          <Route path="/add-doctor" element = {<AddDoctor/>}/>
          <Route path="/doctors-list" element = {<DoctorsList/>}/>
          <Route path="/doctors-list/:docId" element = {<DoctorsFullProfile/>}/>
          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element = {<DoctorDashboard/>}/>
          <Route path="/doctor-appointments" element = {<DoctorAppointments/>}/>
          <Route path="/doctor-profile" element = {<DoctorProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    
    <>
      <Login/>
      <ToastContainer/>
    </>
  );
};

export default App;
