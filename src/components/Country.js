import React from "react";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";

const Country = ({ flags, population, region, name, capital, alpha3Code }) => {
  const { darkMode } = useGlobalContext();

  return (
    <div>
      <Link to={`/country/${alpha3Code}`}>
        {!darkMode ? (
          <div className="dark-element lg:h-[22rem] w-[17rem] h-[20rem] rounded-md pb-14">
            <div className="w-full h-[60%]">
              <img
                src={flags.png}
                alt={name}
                className="w-full h-full rounded-tl-md rounded-tr-md"
              />
            </div>
            <div className="mx-7 my-5">
              <p className="mb-4 text-xl text-white">{name}</p>
              <p className="my-1 text-white">
                Population:{" "}
                <span className="text-white">
                  {population.toLocaleString()}
                </span>{" "}
              </p>
              <p className="my-1 text-white">
                Region: <span className="text-white">{region}</span>{" "}
              </p>
              <p className="my-1 text-white">
                Capital: <span className="text-white">{capital}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="lg:h-[22rem] w-[17rem] h-[20rem] rounded-md pb-14 shadow-md bg-white">
            <div className="w-full h-[60%] ">
              <img
                src={flags.png}
                alt={name}
                className="w-full h-full rounded-tl-md rounded-tr-md"
              />
            </div>
            <div className="mx-7 my-5">
              <p className="mb-4 text-xl font-semibold">{name}</p>
              <p>
                Population: <span>{population.toLocaleString()}</span>{" "}
              </p>
              <p className="my-1">
                Region: <span className="font-normal">{region}</span>{" "}
              </p>
              <p className="my-1">
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
