import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UnauthAdded(){

    const navigate=useNavigate();
    const handleClick=()=>{
  navigate('/login');
    }
  return (
    <div>
       <div>       <div className="flex flex-col h-96 border-2 m-3 bg-white border-rose-500 justify-center items-center">
        <img src="../../../public/d438a32e-765a-4d8b-b4a6-520b560971e8.webp" className="h-56 w-56 " alt="" />
        <h1>Wanna grow your busines?</h1>
        <p >login here first</p>
      <button onClick={handleClick}
       className="bg-orange-500 px-16 font-sans font-medium  shadow-lg shadow-slate-500/50 py-2 m-3 text-white rounded-md">Login</button>
       </div>

       </div>
    </div>
  )
}
