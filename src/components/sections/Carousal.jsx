import './carousal.css'
import { useDispatch ,useSelector} from 'react-redux'
import { addToCart } from '../../redux/action/productAction/addToCart'
export default function Carousal() {
  const dispatch = useDispatch()
  const list = useSelector(state=>state.productReducer.products)
 
const newerItems = list.filter(item=> {return item.category==='mobile'})
console.log(newerItems)
  return (
    <div>
      <div className='section1'>
        <h1 className='font-bold font-serif'>Our featured</h1>
    <section className="container bg-orange-100">
    
    {list?.map((product)=>{
       return <div className="card" key={product.id}>
      <div className="image">
        <img src={`http://localhost:5000/${product?.image}`} alt="" />
      </div>  
      <h2 className='font-semibold italic text-base self-start p-2'>{product.product_name}</h2>
      <h2 className='font-light  text-sm self-end '>{product.description}</h2>
      <div className="flex justify-start">
      <h1 className='bg-gradient-to-r from-teal-800 to-yellow-400 rounded-md px-4 mr-2 my-2 text-orange-200'>Rating - 9.2/10</h1>
      <h1 className='text-slate-500  my-2 pl-10'>Price-${product.price}.00</h1>
      </div>
      <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-28' onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>  
    </div>  
    })}
       
    </section>
  
    </div>
    </div>
  )
}
