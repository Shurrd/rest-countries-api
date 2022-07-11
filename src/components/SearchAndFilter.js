import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchAndFilter = () => {
  return (
    <div className="flex xl:flex-row xl:justify-between flex-col mt-10">
      <div className="my-6 h-16 w-[95%] xl:w-[40%] left-0 right-0 mx-auto search flex flex-row items-center xl:mx-14">
        <div className="h-full bg-white  w-16 flex items-center pl-7">
          <BsSearch size={25} style={{ color: "black" }} />
        </div>
        <input
          type="text"
          className="w-full h-full outline-none pl-3 text-xl"
          placeholder="Search for a Country ..."
        />
      </div>
      <div className="xl:my-auto my-8 mx-3 xl:mx-14 w-[50%] xl:w-[15%]">
        <select className="h-16 text-xl pl-4 w-full filter-search capitalize outline-none border border-gray-50">
          <option value="name">Filter by Region</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
