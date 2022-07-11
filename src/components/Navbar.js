import React from "react";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-white h-24 lg:h-28 flex justify-between pl-6 pr-6 lg:pr-16 lg:pl-16 items-center">
      <p className="text-[1.2rem] lg:text-3xl font-bold">Where in the world?</p>
      <div className="flex flex-row gap-3 items-center cursor-pointer">
        <BsMoon />
        <p className="text-[1rem] lg:text-xl">Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
