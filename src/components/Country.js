import React from "react";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";

const Country = ({ flags, population, region, name, capital, alpha3Code }) => {
  const { darkMode } = useGlobalContext();

  return (
    <div>
      <Link to={`/country/${alpha3Code}`}>
        {!darkMode ? (
          <div className="dark-element lg:h-[27rem] card lg:w-[23rem] md:w-[18rem] sm:h-[28rem] sm:w-[23rem] rounded-xl">
            <div className="w-full h-[50%]">
              <img
                src={flags.png}
                alt={name}
                className="w-full h-full rounded-tl-xl rounded-tr-xl"
              />
            </div>
            <div className="mx-7 my-7">
              <p className="mb-7 text-3xl font-extrabold text-white">{name}</p>
              <p className="text-[1.1rem] font-semibold my-1 text-white">
                Population:{" "}
                <span className="font-normal text-white">{population}</span>{" "}
              </p>
              <p className="text-[1.1rem] font-semibold  my-1 text-white">
                Region: <span className="font-normal text-white">{region}</span>{" "}
              </p>
              <p className="text-[1.1rem] font-semibold my-1 text-white">
                Capital:{" "}
                <span className="font-normal text-white">{capital}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white lg:h-[27rem] shadow-xl lg:w-[23rem] md:w-[18rem] sm:h-[28rem] sm:w-[23rem] rounded-xl">
            <div className="w-full h-[50%] ">
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
        )}
      </Link>
    </div>
  );
};

export default Country;
