import React from "react";
import { MdBluetoothAudio, MdOutlineSpeaker } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";

export default function AdminPage(){
    return (

        <div className='w-full h-screen flex'>
              <div className='w-[400px] h-full bg-green-200'>
        
                <button className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><BsGraphDown />Dashboard</button>
                <button className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><FaRegBookmark />Items</button>
                <button className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><MdOutlineSpeaker />Reviews</button>
                <button className='w-full h-[40px] text-[25px] font-sans flex justify-center items-center'><FaRegUser />Users</button>
        
              </div>
        
              <div className='w-full bg-black'>
              <MdBluetoothAudio className='text-[100px] text-white'/>
              </div>
        
            </div>
            
    );
}
