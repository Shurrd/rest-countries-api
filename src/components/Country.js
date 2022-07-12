import React from "react";

const Country = ({ flags, population, region, name, capital }) => {
  return (
    <div className="bg-white h-[27rem] card w-[23rem] rounded-xl">
      <div className="w-full h-[50%]">
        <img
          src={flags.png}
          alt={name}
          className="w-full h-full rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="mx-7 my-7">
        <p className="mb-7 text-3xl font-extrabold">{name}</p>
        <p className="text-[1.1rem] font-semibold my-1 text-black">
          Population: <span className="font-normal">{population}</span>{" "}
        </p>
        <p className="text-[1.1rem] font-semibold  my-1 text-black">
          Region: <span className="font-normal">{region}</span>{" "}
        </p>
        <p className="text-[1.1rem] font-semibold my-1 text-black">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
