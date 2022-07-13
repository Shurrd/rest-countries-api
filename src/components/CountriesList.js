import React from "react";
import { useGlobalContext } from "../utils/context";
import Country from "./Country";

const CountriesList = () => {
  const { data, searchInput, filteredResults } = useGlobalContext();

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-28 place-items-center mx-20">
        {searchInput !== ""
          ? filteredResults.map((country) => (
              <Country key={country.alpha3Code} {...country} />
            ))
          : data.map((country) => (
              <Country key={country.alpha3Code} {...country} />
            ))}
      </div>
    </div>
  );
};

export default CountriesList;
