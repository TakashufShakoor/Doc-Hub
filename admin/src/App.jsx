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


const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div>
      <Navbar/>
      <ToastContainer />
      <div className="flex items-start ">
        <Sidebar/>
        <Routes>
          {/* <Route path="/" element = {<></>}/> */}
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/all-appointments" element = {<AllAppointments/>}/>
          <Route path="/add-doctor" element = {<AddDoctor/>}/>
          <Route path="/doctors-list" element = {<DoctorsList/>}/>
          <Route path="/doctors-list/:docId" element = {<DoctorsFullProfile/>}/>
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
