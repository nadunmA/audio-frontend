import React from 'react';
import './App.css';
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/admin/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (

    <BrowserRouter>

      <Toaster />

      <Routes path="/*">

       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/testing" element={<Testing/>}/>
       <Route path="/admin/*" element={<AdminPage />} />
       <Route path="/*" element={<HomePage/>} />
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
