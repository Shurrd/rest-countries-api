import React from "react";
import CountriesList from "../components/CountriesList";
import SearchAndFilter from "../components/SearchAndFilter";
import { useGlobalContext } from "../utils/context";

const Home = () => {
  const { darkMode } = useGlobalContext();
  return (
    <section>
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
    </section>
  );
};

export default Home;
