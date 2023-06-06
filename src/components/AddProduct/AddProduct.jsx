import { useState } from "react";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProductApi } from "../../redux/action/productAction/addProduct"
import UnauthAdded from "./UnauthAdded";
export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setproducts] = useState({
    product_name: "",
    description: "",
    price: "",
    category: "",
    specification:""
  });
  const [image, setimage] = useState();
  const auth = localStorage.getItem("token");
  // FUNCTION TO ADD POSTS
const AddProductHndl=()=>{
  dispatch(AddProductApi(auth, products, image))
  navigate('/added')
}
  const onChanges = (e) => {
    setproducts({ ...products, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(e.target.name)
  };
  const onFileChanges = (e) => {
    setimage(e.target.files[0]);
    console.log(e.target.files);
  };

  return (
    <>
    {
      auth?
      <div className="flex flex-col  h-96 justify-around items-center bg-gray-100">
        <form action="/addProduct" encType='multipart/form-data' method="POST"  >
        <div className=" border-2 shadow-md shadow-emerald-700 border-zinc-400 rounded-md">
       <div className="flex flex-row my-2">
        <label htmlFor="product_name" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">Product name</label>
       <input onChange={onChanges} id='product_name' name="product_name" type="text" className=" mx-12 m-1 px-3  shadow-md shadow-slate-600 rounded-md focus:outline-none " />
       </div>
       
       <div className="flex flex-row my-2">
        <label htmlFor="specification" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">Specification</label>
       <input onChange={onChanges} id='specification' name="specification" type="text" className=" mx-12 m-1 px-3 focus:outline-none shadow-md shadow-slate-600 rounded-md " />
       </div>
       <div className="flex flex-row my-2">
        <label htmlFor="price" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">Price</label>
       <input onChange={onChanges} id='price' name="price" type="number" className=" mx-12 m-1 px-3  shadow-md focus:outline-none shadow-slate-600 rounded-md " />
       </div>
       
       <div className="flex flex-row my-2">
        <label htmlFor="category" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold">Category</label>
       <input onChange={onFileChanges}   id='category' name="category" type="file" className="pl-4 w-full file:rounded-full focus:outline-none text-slate-500" />
       </div>
       
       <div className="flex flex-row my-2">
              <label
                htmlFor="category"
                className="w-[50%] m-1 mx-12 text-gray-700 font-semibold"
              >
                Category  
              </label>
              <select onChange={onChanges}  value={ products.category} name="category" id=""className="mx-12 m-1 px-3 focus:outline-none shadow-md shadow-slate-600 rounded-md ">
               
                <option value="Mobile">Mobile</option>
                <option value="PC">PC</option>
                <option value="Toys">Toys</option>
                <option value="Clothing">Clothing</option>
              </select>
            </div>
       <div className="flex flex-row my-2">
        <label htmlFor="description" className="w-[50%] m-1 mx-12 text-gray-700 font-semibold focus:outline-none">Description</label>
       <textarea id='descriptdescriptionion' onChange={onChanges}name="description" type="text" className=" mx-12 m-1 px-3 w-full shadow-md shadow-slate-600 rounded-md " />
       </div>
       </div>
       <button    onClick={AddProductHndl} className="mx-32 mt-2 p-1  rounded-md   bg-amber-500">Add Product</button>
        </form>
      </div>:<UnauthAdded/>
    }
    </>
  );
}
