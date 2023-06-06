import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addReview } from '../../redux/action/userAction/addReview'
import {useDispatch} from 'react-redux'
export default function AddReview() {
  const dispatch = useDispatch()
  const location=useLocation()
  console.log(location.state.id)
  const [review, setreview] = useState({feedback:'',rating:5,productId:location.state.id});
const navigate=   useNavigate()
  const add=()=>{
    dispatch(addReview(review))
    navigate('/cart')
  }

const onChanges=(e)=>{
  console.log(e.target.name)
setreview({...review,[e.target.name]:e.target.value})
}
  return (
<div className="flex flex-col  h-96 justify-around items-center bg-gray-100">
        <form action="/addReview"  method="POST"  >
        <div className=" border-2 shadow-md shadow-emerald-700 border-zinc-400 rounded-md">
       
       <div className="flex flex-row my-2">
        <label htmlFor="rating" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">rating</label>
       <input  onChange={onChanges} id='rating' name="rating" type="number" className=" mx-12 m-1 px-3  shadow-md focus:outline-none shadow-slate-600 rounded-md " />
       </div>
       
       <div className="flex flex-row my-2">
        <label htmlFor="feedback" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">feedback</label>
       <input onChange={onChanges} id='feedback' name="feedback" type="text" className=" mx-12 m-1 px-3 focus:outline-none shadow-md shadow-slate-600 rounded-md " />
       </div>
       
   </div>
       <button onClick={add}   className="mx-32 mt-2 p-1  rounded-md   bg-amber-500">Add Review</button>
        </form>
      </div>
  )
}
