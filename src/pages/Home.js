import React from "react";
import CountriesList from "../components/CountriesList";
import SearchAndFilter from "../components/SearchAndFilter";
import { useGlobalContext } from "../utils/context";

const Home = () => {
  const { darkMode } = useGlobalContext();
  return (
    <div>
      {!darkMode ? (
        <div className="dark-bg">
          <SearchAndFilter />
          <CountriesList />
        </div>
      ) : (
        <div>
          <SearchAndFilter />
          <CountriesList />
        </div>
      )}
    </div>
  );
};

export default Home;
