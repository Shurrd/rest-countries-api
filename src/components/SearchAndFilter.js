import React from "react";
import { BsSearch } from "react-icons/bs";
import { useGlobalContext } from "../utils/context";

const SearchAndFilter = () => {
  const { regions, searchItems, darkMode } = useGlobalContext();
  const allRegions = ["All", ...new Set(regions.map((item) => item.region))];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {!darkMode ? (
        <div className="flex xl:flex-row xl:justify-between flex-col pt-10">
          <form
            className="my-6 h-16 w-[95%] xl:w-[33%] left-0 right-0 mx-auto search shadow-md flex flex-row items-center xl:mx-14"
            onSubmit={handleSubmit}
          >
            <div className="h-full dark-input  w-16 flex items-center pl-7">
              <BsSearch size={25} style={{ color: "white" }} />
            </div>
            <input
              type="text"
              className="w-full h-full outline-none pl-3 text-xl dark-input"
              placeholder="Search for a Country ..."
              onChange={(e) => searchItems(e.target.value)}
            />
          </form>
          <div className="xl:my-auto my-8 mx-7 xl:mx-14 w-[40%] xl:w-[12%] ">
            <select className="h-16 text-xl pl-4 w-full filter-search outline-none dark-input">
              {allRegions.map((item, index) => (
                <option className="text-white" value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="flex xl:flex-row xl:justify-between flex-col mt-10">
          <form
            className="my-6 h-16 w-[95%] xl:w-[33%] left-0 right-0 mx-auto search shadow-xl flex flex-row items-center xl:mx-14"
            onSubmit={handleSubmit}
          >
            <div className="h-full bg-white  w-16 flex items-center pl-7">
              <BsSearch size={25} style={{ color: "black" }} />
            </div>
            <input
              type="text"
              className="w-full h-full outline-none pl-3 text-xl"
              placeholder="Search for a Country ..."
              onChange={(e) => searchItems(e.target.value)}
            />
          </form>
          <div className="xl:my-auto my-8 mx-7 xl:mx-14 w-[40%] xl:w-[12%]">
            <select className="h-16 text-xl pl-4 w-full filter-search shadow-xl outline-none border border-gray-50">
              {allRegions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
