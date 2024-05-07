import React from 'react';
import { useState } from 'react';
import './App.css';
// import LoginForm from './components/LoginForm';
// import SideBar from './components/SideBar';
// import SearchBar from './components/SearchBar';
// import SaveButton from './components/SaveButton';
// import Pagination from './components/Pagination';
// import FormComponent from './components/FormComponent';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from './pages/Dashboard'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AddEditUser from './components/AddEditUser';
// import AddEditLocation from './components/AddEditLocation';
// import CompanyDetails from './components/CompanyDetails';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (userData) => {
    // Handle saving logic here
    console.log('Saving user data:', userData);
    setOpen(false);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setOpen(false);
  };



  // const [isEditLocationOpen, setIsEditLocationOpen] = useState(false);

  // // Function to open the Edit Location form
  // const openEditLocation = () => {
  //   setIsEditLocationOpen(true);
  // };

  // // Function to close the Edit Location form
  // const closeEditLocation = () => {
  //   setIsEditLocationOpen(false);
  // };




  return (
    <div>
      {/* <FormComponent scenario='checkIn'/> */}
      {/* <h1>Your App</h1> */}
      {/* Button to open the Edit Location form */}
      {/* <button onClick={openEditLocation}>Edit Location</button> */}

      {/* Render the EditLocation component conditionally */}
      {/* {isEditLocationOpen && <EditLocation onClose={closeEditLocation} />} */}


      <button onClick={handleOpen}>Open User Form</button>
      <AddEditUser
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        onCancel={handleCancel}
        mode="add"
      />
    </div>
  );
};

export default App;