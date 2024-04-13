import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center font-sans h-32 mx-auto max-w-full bg-white">
      <div className="flex mx-6">
        <img
          src="https://imgs.search.brave.com/9n9uf9B3cUEeXi2U937plrGrqqd0NrCz1vxcteEtHss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MzAu/cG5n"
          alt="Logo"
          className="max-w-36 "
        />
        <ul className="hidden md:flex">
          <li className="text-[#032168] pl-16 px-6 py-2 text-lg font-medium cursor-pointer hover:text-[#5e7dc6]">
            Personal
          </li>
          <li className="text-[#032168] px-6 py-2 text-lg font-medium cursor-pointer hover:text-[#5e7dc6]">
            Business
          </li>
          <li className="text-[#032168] px-6 py-2 text-lg font-medium cursor-pointer hover:text-[#5e7dc6]">
            Developer
          </li>
          <li className="text-[#032168] px-6 py-2 text-lg font-medium cursor-pointer hover:text-[#5e7dc6]">
            Help
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button
          type="button"
          className="relative ring-2 ring-[#032168] text-[#032168] px-10 py-3 mr-5 rounded-full font-medium"
        >
          Log In
        </button>
        <button
          type="button"
          className="relative bg-[#072a7b] text-white px-10 py-4 mr-12 rounded-full font-medium"
        >
          Sign Up
        </button>
      </div>
      <div onClick={handleNav} className="px-5 block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-32 md:hidden w-[60%] h-full bg-[#f5f6fb] border-gray-800 ease-in-out duration-500"
            : "fixed left-0 top-32 md:hidden w-[60%] h-full bg-[#f5f6fb] border-gray-800 ease-in-out duration-500"
        }
      >
        <ul className="pt-3">
          <li className="text-[#032168] border-b border-gray-300 px-6 pb-2 text-lg font-medium ">
            Personal
          </li>
          <li className="text-[#032168] border-b border-gray-300 px-6 py-2 text-lg font-medium">
            Business
          </li>
          <li className="text-[#032168] border-b border-gray-300 px-6 py-2 text-lg font-medium">
            Developer
          </li>
          <li className="text-[#032168] px-6 py-2 text-lg font-medium">Help</li>
        </ul>
        <div className="flex p-3 gap-4">
          <button
            type="button"
            className="relative ring-2 ring-[#032168] text-[#032168] px-3 py-2 rounded-full font-medium"
          >
            Log In
          </button>
          <button
            type="button"
            className="relative bg-[#072a7b] text-white px-3 py-2 rounded-full font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
