import { useDispatch, useSelector } from 'react-redux'
import CartList from './CartList'

export default function OnLoagedIn() {
const dispatch=  useDispatch()
const cartList = useSelector(state=>state.productReducer.cartList)
  return (
    <div className=' h-screen  pt-12 m-1 items-center bg-slate-50'>
<h1 className="font-sans text-3xl text-gray-600 font-thin mx-80 px-24 "> Your Shopping List</h1>
   {  cartList.map((item) =>{console.log(item); {return <div key={item.cartId}><CartList product={item.data} cartId={item?.cartId}  /></div>}}
      )}
    </div>
  )
}
