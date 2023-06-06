import { useEffect, useState } from "react";
import { searchApi } from "../../redux/action/productAction/getAllProducts";
import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const [category, setcategory] = useState('');
  const cartItem=useSelector(state=>state.productReducer.cartItem)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchApi());
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className=" ">
      <nav className="h-12 flex justify-center items-center  sticky top-0 bg-orange-100 z-50 ">
        <img
          src="../../../public/pngegg.png"
          alt="img"
          className="h-8 justify-start"
        />
        <ul className="flex flex-row from-stone-900 font-serif text-md font-medium">
          <li className="px-4">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>|</li>
          <li className="px-4">
            <NavLink to="/addProduct"> Add Product</NavLink>
          </li>
          <li>|</li>
          <li className="px-4" onChange={(e)=>setcategory(e.target.value)}> Category
            <select name="category">
              <option value="Mobile">Mobile</option>
              <option value="PC">PC</option>
              <option value="Toys">Toys</option>
              <option value="Clothing">Clothing</option>
            </select>
          </li>
          <li>|</li>
          <li className="px-4">
            <NavLink to="/contact"> Contact Us</NavLink>
          </li>
          <button
            onClick={handleClick}
            className="flex flex-row align-start ml-36 bg-gray-900 w-24  font-extrabold rounded-lg text-rose-200 px-6"
          >
            <BsFillCartCheckFill className="text-red-300 font-[20px]" />
            <div className="relative">
              Cart
              <div className="absolute top-0 bottom-0   left-10 text-white px-2 bg-red-600 rounded-md">
             {cartItem}
              </div>
            </div>
          </button>
        </ul>
      </nav>
       
        <Outlet context={[category]}/>
    </div>
  );
}
