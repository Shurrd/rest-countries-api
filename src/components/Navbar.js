import React from "react";
import { BsMoon } from "react-icons/bs";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkModeHandler, darkMode } = useGlobalContext();

  return (
    <div>
      {!darkMode ? (
        <nav className=" h-24 lg:h-28 flex justify-between pl-6 pr-6 lg:pr-16 lg:pl-16 items-center shadow-xl dark-element">
          <Link to="/">
            <p className="text-[1.2rem] lg:text-3xl text-white font-bold">
              Where in the world?
            </p>
          </Link>
          <div
            className="flex flex-row gap-3 items-center cursor-pointer "
            onClick={darkModeHandler}
          >
            <BsMoon className="text-white" />
            <p className="text-[1rem] text-white lg:text-xl">Dark Mode</p>
          </div>
        </nav>
      ) : (
        <nav className="bg-white h-24 lg:h-28 flex justify-between pl-6 pr-6 lg:pr-16 lg:pl-16 items-center shadow-xl">
          <Link to="/">
            <p className="text-[1.2rem] lg:text-3xl font-bold">
              Where in the world?
            </p>
          </Link>
          <div
            className="flex flex-row gap-3 items-center cursor-pointer"
            onClick={darkModeHandler}
          >
            <BsMoon />
            <p className="text-[1rem] lg:text-xl">Dark Mode</p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
