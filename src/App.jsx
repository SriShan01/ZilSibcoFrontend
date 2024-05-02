// import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import EditButton from './components/EditButton';
import SaveButton from './components/SaveButton';
import Pagination from './components/Pagination';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} theme="dark" />
      <Router>
        <Routes>
          <Pagination />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
