import {AiTwotoneDelete} from 'react-icons/ai'
import {MdReviews} from 'react-icons/md'
import {remove} from '../../redux/action/productAction/removeFromKart'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function CartList(props) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartList = useSelector(state => state.productReducer.cartList)
  console.log(cartList)
    const ReviewClick = ()=>{
      navigate('/addReview',{state:{
       id: props.product.id
      }},)
    }
  return (
    <div>
      <div className="flex flex-row justify-center items-center m-3 ">
<img src={`http://localhost:5000/${props.product?.image}`} alt="" className="h-24" />

<h1 className="m-16 text-gray-500 text-2xl font-serif">{props.product.title}</h1>
<h1 className="m-16 text-gray-500 font-serif">{props.product.specification}</h1>
<h1 className="m-16  text-gray-500 font-serif">${props.product.price}.00</h1>
<button className="m-16  text-gray-500 font-serif" onClick={()=>ReviewClick()}><MdReviews/></button>

<button className='text-red-500 text-3xl' onClick={()=>dispatch(remove(props.cartId))}><AiTwotoneDelete></AiTwotoneDelete></button>

      </div>
    </div>
  )
}
