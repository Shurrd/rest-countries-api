import React from "react";
import CountriesList from "../components/CountriesList";
import Navbar from "../components/Navbar";
import SearchAndFilter from "../components/SearchAndFilter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchAndFilter />
      <CountriesList />
    </div>
  );
};

export default Home;
