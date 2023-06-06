import { useNavigate } from "react-router-dom";

export default function Unauth() {
    const navigate=useNavigate();
    const handleClick=()=>{
  navigate('/login');
    }
  return (
    <div>
       <div>       <div className="flex flex-col h-96 border-2 m-3 bg-white border-rose-500 justify-center items-center">
        <img src="../../../public/d438a32e-765a-4d8b-b4a6-520b560971e8.webp" className="h-56 w-56 " alt="" />
        <h1>Missing cart Items?</h1>
        <p >login to see the items you have added previously</p>
      <button onClick={handleClick}
       className="bg-orange-500 px-16 font-sans font-medium  shadow-lg shadow-slate-500/50 py-2 m-3 text-white rounded-md">Login</button>
       </div>

       </div>
    </div>
  )
}
