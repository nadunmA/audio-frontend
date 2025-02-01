import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const naviagate =  useNavigate();

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email, password)

        axios.post("http://localhost:3001/api/users/login",
          {
            email : email,
            password : password
          }
        ).then((res)=>{
          console.log(res)
          toast.success("login sucess")
          const user = res.data.user
          if(user.role == "admin"){
            naviagate("/admin/")

          }else{
            naviagate("/admin/")
          }
          
        }).catch((err)=>{
          console.log(err)
          toast.error(err.response.data.error)
        })
    }

    return(

        <div className="bg-picture w-full h-screen flex justify-center items-center">
           <form onSubmit={handleOnSubmit}>

              <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-l-2xl flex justify-center items-center flex-col relative">
              <img src="/kv.png" alt="logo" className="w-[80px] h-[80px] absolute top-4 object-cover"/>
              <input type="email" placeholder="Email" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" 
              value={email} onChange={(e) => {
                setEmail(e.target.value);
              }}
              />

              <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" 
              value={password} onChange={(e) => {
                setPassword(e.target.value);
              }}
              />

              <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg">Login</button>

              </div>

            </form>
        </div>
    )
}