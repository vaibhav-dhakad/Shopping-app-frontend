import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../redux/action/productAction/addToCart"
export default function Card(props) {
const dispatch = useDispatch()
  return (
    <div>
       <div className="border-2 rounded-md border-blue-200 m-2 h-64">
        <img src={`http://localhost:5000/${props.product?.image}`} alt="" className="border-2 rounded-md border-emerald-500 h-40" />
        <h2 className="text-md font-semibold italic self-center ">{props.product.product_name}</h2>
        <p className="text-sm font-thin self-start">{props.product.description}</p>
        <div className="flex justify-start text-sm">
          <h1 className="bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-1 mr-1 my-1 text-orange-200">
            Rating - 9.2/10
          </h1>
          <h1 className="text-slate-500  my-1 pl-1">Price-${props.product.price}.00</h1>
        </div>
        <button className="text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md mb-1 w-full "onClick={()=>dispatch(addToCart(props.product))}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
