import React from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption, GrApple } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const states = ["ACT","NSW","NT","QLD","SA","TAS","VIC","WA"]
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <div className="flex bg-blue-400 w-full justify-center items-center py-10">
        <div className="min-w-[300px] w-2/5 bg-lightgraytheme grid grid-cols-1 rounded-md gap-y-5">
          {/* Login and Register Selection Option */}
          <div className="col-span-1 grid grid-cols-2 border-b-[0.5px] border-[#AAAAAA]">
            <div className="col-span-1 text-center">
              <Link
                to="/login"
                className={`uppercase block w-full font-semibold py-4 ${
                  location.pathname === "/login"
                    ? "border-b-2 border-secondarycolor"
                    : ""
                }`}
              >
                Login
              </Link>
            </div>
            <div className="col-span-1 text-center">
              <Link
                to="/register"
                className={`uppercase block w-full font-semibold py-4 ${
                  location.pathname === "/register"
                    ? "border-b-2 border-secondarycolor"
                    : ""
                }`}
              >
                Register
              </Link>
            </div>
          </div>
          {/* Sign in with multiple option */}
          <div className="px-14 py-8 grid grid-cols-1">
            <div className="col-span-1 grid grid-cols-1 gap-y-4">
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Register with
                </h2>
              </div>
              <div>
                <button className="flex items-center border border-[#AAAAAA] rounded-lg w-full py-2 shadow-sm hover:bg-gray-100">
                  {/* Google Icon */}
                  <FcGoogle className="text-red-500 text-2xl w-1/12" />
                  {/* Text */}
                  <span className="text-sm font-semibold text-primarytext uppercase w-11/12">
                    Sign up with Google
                  </span>
                </button>
              </div>
              <div>
                <button className="flex items-center border border-[#AAAAAA] rounded-lg w-full py-2 shadow-sm hover:bg-gray-100">
                  {/* Google Icon */}
                  <GrFacebookOption className="text-[#4267B2] text-2xl w-1/12" />
                  {/* Text */}
                  <span className="text-sm font-semibold text-primarytext uppercase w-11/12">
                    Sign up with Facebook
                  </span>
                </button>
              </div>
              <div>
                <button className="flex items-center border border-[#AAAAAA] rounded-lg w-full py-2 shadow-sm hover:bg-gray-100">
                  {/* Google Icon */}
                  <GrApple className="text-black text-2xl w-1/12" />
                  {/* Text */}
                  <span className="text-sm font-semibold text-primarytext uppercase w-11/12">
                    Sign up with Apple
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t-2 border-gray-400"></div>
              <span className="px-4 text-primarytext">or</span>
              <div className="flex-grow border-t-2 border-gray-400"></div>
            </div>
            <div className="col-span-1 grid grid-cols-2 gap-y-4 gap-x-3">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-center">
                  Register with email
                </h2>
              </div>
              {/* First Name Field */}
              <div className="relative col-span-1">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="firstname"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  First name *
                </label>
              </div>

              {/* Last Name Field */}
              <div className="relative col-span-1">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="lastname"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Last name *
                </label>
              </div>
              {/* Address Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="streetaddress1"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Street address 1 *
                </label>
              </div>
              {/* Address Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="streetaddress2"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Street address 2
                </label>
              </div>
              {/* Suburb Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="streetaddress2"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Suburb *
                </label>
              </div>
              {/* Suburb Field */}
              <div className="relative col-span-1">
                {/* Email Input Field */}
                <select className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                  {states.map((items)=>(
                    <option value={items}>{items}</option>
                  ))}
                </select>
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  State *
                </label>
              </div>
              {/* Suburb Field */}
              <div className="relative col-span-1">
                {/* Email Input Field */}
                <input
                  type="text"
                  id="streetaddress2"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Postcode *
                </label>
              </div>
              {/* Email Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="email"
                  id="email"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email address *
                </label>
              </div>
              {/* Email Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="email"
                  id="email"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Phone number *
                </label>
              </div>
              {/* Password Field with Eye Icon */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="password"
                  id="password"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Create password *
                </label>
                <IoEyeOutline className="absolute text-2xl right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
              {/* Email Field */}
              <div className="relative col-span-2">
                {/* Email Input Field */}
                <input
                  type="email"
                  id="email"
                  className="block rounded-lg font-semibold px-2.5 pb-2.5 pt-4 w-full text-sm text-primarytext bg-white border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" " // Keeps the label floating effect functional
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-600 font-medium duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Re-enter password *
                </label>
              </div>

              {/* Sign In Button */}
              <div className="col-span-2">
                <button className="w-full bg-black uppercase text-white font-semibold py-2 rounded-sm hover:bg-gray-800">
                  Create an account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
