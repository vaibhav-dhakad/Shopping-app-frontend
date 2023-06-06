import { useNavigate } from "react-router-dom"


export default function Landing() {
  const navigate =useNavigate()
const handleClick= ()=>{
navigate('/signup')
}
  return (
    <div className=' flex items-center justify-center p-16' >
      <div className=" block w-[50%]">
        <h1 className=' block text-5xl text-gray-800 px-16'>Better Your </h1>
        <h2 className="text-5xl font-bold  text-gray-800 px-16">E-Commerce</h2> 
        <h3 className="text-amber-600 font-semibold px-16 py-8">Easier for you!</h3>
     <p className="text-gray-800 px-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci tenetur deleniti quae laborum vel similique alias magnam molestias quam.</p>
     <button className=" bg-amber-600 my-4 mx-16 rounded-xl px-8" onClick={handleClick}>SignUp </button>
      </div>
      <div className="right">
        <img src="../../../public/145254-OTLOQF-148.jpg" alt="img" className='h-80 bg-inherit' />
      </div>
    </div>
  )
}
