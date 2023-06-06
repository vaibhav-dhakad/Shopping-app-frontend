import { useDispatch, useSelector } from 'react-redux'
import './mobile.css'
import { addToCart } from '../../redux/action/productAction/addToCart'
import { useNavigate } from 'react-router-dom'

export default function Mobile(props) {
const dispatch = useDispatch()
const list = useSelector(state=>state.productReducer.products)
const navigate = useNavigate()
const newerItems = list.slice(list.length-4)
console.log(newerItems)
const viewAll = ()=>{
  navigate('/allMobiles')
}
  return (
    <div className='flex m-1 border border-rose-300 h-[350px] '>
     <div className="block w-[33%]"><img className='h-52 m-2    block px-2' src="../../../public/download.jpg" alt="" />
     <h1 className="block  px-16 m-1 "> mobiles</h1>
     <button className="bg-blue-500 rounded-md px-8 mx-8 " onClick={viewAll}>View All</button></div>
     <div className="mobile-slider">
       
        <div className="mobile-slider-card">
         <div className="mobile-image">
         <img src={`http://localhost:5000/${newerItems[1]?.image}`} alt="" />
        </div>
        <h2 className='text-md font-semibold italic self-center '>{newerItems[1]?.product_name}</h2>
        <p className='text-sm font-thin self-start'>{newerItems[1]?.description}</p>
        <div className="flex justify-start text-sm">
        <h1 className='bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-1 mr-1 my-1 text-orange-200'>Rating - 9.2/10</h1>
        <h1 className='text-slate-500  my-1 pl-1'>Price-${newerItems[1]?.price  }.00</h1>
        </div>
        <button className='text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-20 mb-1' onClick={()=>dispatch(addToCart(newerItems[1]))} >Add to Cart</button>  
   
        </div>
       
        <div className="mobile-slider-card">
         <div className="mobile-image">
         <img src={`http://localhost:5000/${newerItems[2]?.image}`} alt="" />
        </div>
        <h2 className='text-md font-semibold italic self-center'>{newerItems[2]?.product_name}</h2>
        <p className='text-sm font-thin self-start'>{newerItems[2]?.description}</p>
        <div className="flex justify-start text-sm">
        <h1 className='bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-1 mr-1 my-1 text-orange-200'>Rating - 9.2/10</h1>
        <h1 className='text-slate-500  my-1 pl-1'>Price-${newerItems[2]?.price}.00</h1>
        </div>
        <button className='text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-20 mb-1on' onClick={()=>dispatch(addToCart(newerItems[2]))}>Add to Cart</button>  
   
        </div>
       
        <div className="mobile-slider-card">
         <div className="mobile-image">
         <img src={`http://localhost:5000/${newerItems[3]?.image}`} alt="" />
        </div>
        <h2 className='text-md font-semibold italic self-center '>{newerItems[3]?.product_name}</h2>
        <p className='text-sm font-thin self-start'>{newerItems[3]?.description}</p>
        <div className="flex justify-start text-sm">
        <h1 className='bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-1 mr-1 my-1 text-orange-200'>Rating - 9.2/10</h1>
        <h1 className='text-slate-500  my-1 pl-1'>Price-${newerItems[3]?.price}.00</h1>
        </div>
        <button className='text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-20 mb-1'onClick={()=>dispatch(addToCart(newerItems[3]))}>Add to Cart</button>  
   
        </div>
       
        <div className="mobile-slider-card">
         <div className="mobile-image">
         <img src={`http://localhost:5000/${newerItems[0]?.image}`} alt="" />
        </div>
        <h2 className='text-md font-semibold italic self-center sart'>{newerItems[0]?.product_name}</h2>
          <p className='text-sm font-thin self-start'>{newerItems[0]?.description}</p>
        <div className="flex justify-start text-sm">
        <h1 className='bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-1 mr-1 my-1 text-orange-200'>Rating - 9.2/10</h1>
        <h1 className='text-slate-500  my-1 pl-1'>Price-${newerItems[0]?.price}.00</h1>
        </div>
        <button className='text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-20 mb-1'onClick={()=>dispatch(addToCart(newerItems[0]))}>Add to Cart</button>  
   
        </div>
       
      
     </div>
    </div>
  )}