import React from "react";
import { MdBluetoothAudio, MdOutlineSpeaker } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function AdminPage(){
    return (

        <div className='w-full h-screen flex'>
              <div className='w-[400px] h-full bg-green-200'>
        
                <button className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><BsGraphDown />Dashboard</button>
                <Link to="/admin/booking" className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><FaRegBookmark />Booking</Link>
                <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><MdOutlineSpeaker />Items</Link>
                <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><FaRegUser />Users</Link>
        
              </div>
        
              <div className='w-[calc(100vw-400px)]'>

              <Routes path="/*">
                <Route path="/booking" element={<h1>Booking</h1>}/>
                <Route path="/items" element={<h1>Items</h1>}/>
              </Routes>

              </div>
        
            </div>
            
    );
}
