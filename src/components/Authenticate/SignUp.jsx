import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link,useNavigate } from "react-router-dom";
import {useState} from 'react'
export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(credentials);
    const { name, email, password } = credentials;
    //  console.log(name);
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect
    localStorage.setItem("token", json.token);
    navigate("/");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-row h-[425px] overflow-hidden   ">
      <div className="w-[50%]">
      
        <img className="h-4/5 m-4" src="../../../public/03.jpg" alt="" />
      </div>
      <div className="flex  flex-col border-1 border-slate-500 m-3 shadow-md">
        <h1 className="font-bold drop-shadow-2xl  py-6 font-mono text-2xl px-12">
          Sign Up to Explore <br />
          <div className="text-sm font-thin  font-sans pt-2">
            Already a member?{" "}
            <span className="text-blue-500">
              <Link to="/login"> login here</Link>
            </span>
          </div>
        </h1>
        <h1 className="px-12 m-0 text-gray-600 font-serif font-semibold  ">
          <label htmlFor="username">User name</label>
        </h1>
        <div className="relative mx-12 ">
          <input
          name='name'
          onChange={onChange}
            type="text"
            id="username"
            className="text-red-800 px-6 rounded-md my-3 bg-white-400 focus:outline-white-500"
          />
          <CgProfile className="absolute top-4 right-5" />
        </div>
        <h1 className="px-12 m-0 text-gray-600 font-serif font-semibold  ">
          <label htmlFor="email">E-mail</label>
        </h1>
        <div className="relative mx-12 ">
          <input
          onChange={onChange}
          name='email'
            type="text"
            id="email"
            className="text-red-800 px-6 rounded-md my-3 bg-white-400 focus:outline-white-500"
          />
          <MdOutlineEmail className="absolute top-4 right-5" />
        </div>
        <h1 className="px-12 m-0 text-gray-600 font-serif font-semibold  ">
          <label htmlFor="password">Password</label>
        </h1>
        <div className="relative mx-12 ">
          <input
             onChange={onChange}
             name='name'
            type="text"
            id="password"
            className="text-red-800 px-6 rounded-md my-3 bg-white-400 focus:outline-white-500"
          />
          <RiLockPasswordFill className="absolute top-4 right-5" />
        </div>
        <button
          className=" text-white
 bg-blue-600 rounded-md my-3 mx-12  py-4"
      onClick={
        handleSubmit
      }  >
          Create an Account
        </button>
      </div>
    </div>
  );
}
