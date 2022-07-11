import React from "react";

const Country = ({ flags, population, region, name, capital }) => {
  return (
    <div className="bg-white h-[28rem] card w-[22rem]">
      <div className="w-full h-[50%]">
        <img src={flags.png} alt={name} className="w-full h-full" />
      </div>
      <div>
        <p>{name}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default Country;
