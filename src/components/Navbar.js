import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="justify-between md:items-center md:flex md:px-8 p-7  w-full absolute ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 to-blue-300 text-4xl cursor-pointer font-bold font-serif">
        TV Shows
      </h1>
      <div >
      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 to-blue-300  hover:text-blue-100 cursor-pointer">
                <a onClick={()=>navigate("/")}>Home</a>
              </li>

              <li className="font-semibold text-xl  text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 to-blue-300  hover:text-blue-100 cursor-pointer">
                <a>About Us</a>
              </li>
              <li className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 to-blue-300  hover:text-blue-100 cursor-pointer">
                <a>Contact Us</a>
              </li>
            </ul>
      </div>
    </div>
  );
}

export default Navbar;