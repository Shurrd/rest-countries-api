import React from "react";
import { useGlobalContext } from "../utils/context";
import Country from "./Country";

const CountriesList = () => {
  const { data, searchInput, filteredResults } = useGlobalContext();

  return (
    <section>
      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-16 place-items-center mx-16 pb-[32%]">
        {searchInput !== ""
          ? filteredResults.map((country) => (
              <Country key={country.alpha3Code} {...country} />
            ))
          : data?.map((country) => (
              <Country key={country.alpha3Code} {...country} />
            ))}
      </div>
    </section>
  );
};

export default CountriesList;
