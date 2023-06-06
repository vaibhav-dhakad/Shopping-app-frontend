import { MdOutlineEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex flex-row h-[425px] overflow-hidden   ">
      <div className="w-[50%]">
        {" "}
        <img className="h-4/5 m-4" src="../../../public/03.jpg" alt="" />
      </div>
      <div className="flex  flex-col border-1 border-slate-500 m-3 shadow-md">
        <h1 className="font-bold drop-shadow-2xl  py-6 font-mono text-2xl px-12">
          Keep Exploration
          <br />
          <h2 className="text-sm font-thin  font-sans pt-2">
            Not a member?
            <span className="text-blue-500">
              <Link to="/signup"> Register here</Link>
            </span>
          </h2>{" "}
        </h1>
        <h1 className="px-12 m-0 text-gray-600 font-serif font-semibold  ">
          <label htmlFor="username">User name</label>
        </h1>
        <div className="relative mx-12 ">
          <input
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
            type="text"
            id="password"
            className="text-red-800 px-6 rounded-md my-3 bg-white-400 focus:outline-white-500"
          />
          <RiLockPasswordFill className="absolute top-4 right-5" />
        </div>
        <button
          className=" text-white
 bg-blue-600 rounded-md my-3 mx-12  py-4"
        >
    Login
        </button>
      </div>
    </div>
  );
}
