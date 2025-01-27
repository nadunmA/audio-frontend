import React from 'react';
import './App.css';
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/admin/home/homePage';

function App() {
  return (

    <BrowserRouter>
      <Routes path="/*">

       <Route path="/admin/*" element={<AdminPage />} />
       <Route path="/*" element={<HomePage/>} />
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
