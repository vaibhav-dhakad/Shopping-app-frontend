import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/action/productAction/addToCart";
import Card from "./Card";
import {  useOutletContext } from "react-router-dom";
export default function AllProduct() {
 const [category,setcategory]= useOutletContext()
  const list = useSelector(state=>state.productReducer.products)
console.log(list);
 console.log(category,'category')

return (
    <div
      className="grid grid-cols-3
 
 "
    >
{list?.map(item=>{
   return  <div key={item.id}> <Card product = {item}/></div>
})}
     
    </div>
  );
}
