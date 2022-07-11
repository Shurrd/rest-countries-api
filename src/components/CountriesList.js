import React from "react";
import { useGlobalContext } from "../utils/context";
import Country from "./Country";

const CountriesList = () => {
  const data = useGlobalContext();
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24 mx-14">
      {data.map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
};

export default CountriesList;
