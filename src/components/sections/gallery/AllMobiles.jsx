import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/action/productAction/addToCart";
import Card from "./Card";
export default function AllMobiles() {
  const list = useSelector(state=>state.productReducer.products);
  const newerList = list.filter(product =>{return product.category === 'mobile'})
 console.log(newerList,'mobilelss')
return (
    <div
      className="grid grid-cols-3
 
 "
    >
{newerList?.map(item=>{
   return  <div> <Card product = {item}/></div>
})}
     
    </div>
  );
}

