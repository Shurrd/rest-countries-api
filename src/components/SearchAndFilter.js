import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useGlobalContext } from "../utils/context";

const SearchAndFilter = () => {
  const { regions, filterItems } = useGlobalContext();
  const allRegions = ["All", ...new Set(regions.map((item) => item.region))];

  return (
    <div className="flex xl:flex-row xl:justify-between flex-col mt-10">
      <div className="my-6 h-16 w-[95%] xl:w-[33%] left-0 right-0 mx-auto search flex flex-row items-center xl:mx-14">
        <div className="h-full bg-white  w-16 flex items-center pl-7">
          <BsSearch size={25} style={{ color: "black" }} />
        </div>
        <input
          type="text"
          className="w-full h-full outline-none pl-3 text-xl"
          placeholder="Search for a Country ..."
        />
      </div>
      <div className="xl:my-auto my-8 mx-4 xl:mx-14 w-[50%] xl:w-[15%]">
        <select
          className="h-16 text-xl pl-4 w-full filter-search outline-none border border-gray-50"
          onChange={filterItems}
        >
          {allRegions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
