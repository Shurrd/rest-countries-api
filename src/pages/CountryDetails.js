import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../utils/context";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const CountryDetails = () => {
  const { darkMode } = useGlobalContext();
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/alpha/${alpha3Code}`
        );
        const data = await response.json();
        if (data) {
          setCountry(data);
        } else {
          setCountry(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCountry();
  }, [alpha3Code]);

  const {
    area,
    capital,
    currencies,
    languages,
    name,
    region,
    subregion,
    nativeName,
    population,
    borders,
    flags,
    topLevelDomain,
  } = country;

  return (
    <div>
      {!darkMode ? (
        <div className="pb-[22vh] dark-bg">
          <div className="pb-1"></div>
          <Link to="/">
            <div className="flex flex-row items-center bg-white dark-element w-max p-3 pr-7 pl-7 mt-10 mx-8 rounded-md shadow-md">
              <p className="pr-4 text-3xl font-bold text-white">
                <BiArrowBack />
              </p>
              <p className="text-xl text-white">Back</p>
            </div>
          </Link>
          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            <img
              className="mt-20 w-[90%] place-self-center shadow-md"
              src={flags?.png}
              alt={name}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-10 sm:gap-5 w-[90%] place-self-center">
              <div className=" grid grid-cols-1 sm:gap-3">
                <p className="text-3xl sm:mt-7 xl:mt-20 mb-10 font-semibold text-white">
                  {name}
                </p>
                <p className="text-xl font-semibold text-white">
                  Native Name:{" "}
                  <span className="font-normal text-white">{nativeName}</span>
                </p>
                <p className="text-xl font-semibold text-white">
                  Population:{" "}
                  <span className="font-normal text-white">
                    {population?.toLocaleString()}
                  </span>
                </p>
                <p className="text-xl font-semibold text-white">
                  Region:{" "}
                  <span className="font-normal text-white">{region}</span>
                </p>
                <p className="text-xl font-semibold text-white">
                  Sub Region:{" "}
                  <span className="font-normal text-white">{subregion}</span>
                </p>
                <p className="text-xl font-semibold text-white">
                  Capital:{" "}
                  <span className="font-normal text-white">{capital}</span>
                </p>
              </div>
              <div className="flex flex-col xl:mt-44 sm:mt-10 md:mr-3 gap-3">
                <p className="text-xl font-semibold text-white">
                  Area:{" "}
                  <span className="font-normal text-white">
                    {area?.toLocaleString()} sq.
                  </span>
                </p>
                <p className="text-xl font-semibold text-white">
                  Top Level Domain:
                  {topLevelDomain?.map((item, index) => (
                    <span className="font-normal text-white" key={index}>
                      {item}
                    </span>
                  ))}
                </p>
                <p className="text-xl font-semibold text-white">
                  Currency:{" "}
                  {currencies?.map((item, index) => (
                    <span className="font-normal" key={index}>
                      {item.name}{" "}
                      <span className=" text-white">({item.symbol})</span>
                    </span>
                  ))}
                </p>
                <p className="text-xl font-semibold text-white">
                  Language:{" "}
                  <span className="font-normal text-white">
                    {languages?.map((data) => data.name).join(", ")}
                  </span>
                </p>
              </div>
              <div className="ml-0 md:w-full sm:w-[80%] xl:w-[30rem] mt-10 flex gap-8 items-center flex-wrap ">
                <p className="text-xl text-white font-semibold">
                  Border Countries:{" "}
                </p>
                {borders?.length ? (
                  borders?.map((item, index) => (
                    <div
                      className="self-center mt-1 dark-element shadow-lg p-2 rounded"
                      key={index}
                    >
                      <Link to={`/country/${item}`} className="text-white">
                        {item}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="self-center mt-1 bg-white dark-element shadow-lg p-2 text-white rounded">
                    No Borders ...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-[22vh]">
          <div className="pb-1"></div>
          <Link to="/">
            <div className="flex flex-row items-center w-max p-3 pr-7 pl-7 mt-10 mx-8 rounded-md shadow-md">
              <p className="pr-4 text-3xl font-bold">
                <BiArrowBack />
              </p>
              <p className="text-xl">Back</p>
            </div>
          </Link>
          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            <img
              className="mt-20 w-[90%] place-self-center shadow-md"
              src={flags?.png}
              alt={name}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-10 sm:gap-5 w-[90%] place-self-center">
              <div className=" grid grid-cols-1 sm:gap-3">
                <p className="text-3xl sm:mt-7 xl:mt-20 mb-10 font-semibold">
                  {name}
                </p>
                <p className="text-xl font-semibold ">
                  Native Name:{" "}
                  <span className="font-normal ">{nativeName}</span>
                </p>
                <p className="text-xl font-semibold ">
                  Population:{" "}
                  <span className="font-normal">
                    {population?.toLocaleString()}
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Region: <span className="font-normal">{region}</span>
                </p>
                <p className="text-xl font-semibold">
                  Sub Region: <span className="font-normal">{subregion}</span>
                </p>
                <p className="text-xl font-semibold">
                  Capital: <span className="font-normal">{capital}</span>
                </p>
              </div>
              <div className="flex flex-col xl:mt-44 sm:mt-10 md:mr-3 gap-3">
                <p className="text-xl font-semibold ">
                  Area:{" "}
                  <span className="font-normal">
                    {area?.toLocaleString()} sq.
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Top Level Domain:
                  {topLevelDomain?.map((item, index) => (
                    <span className="font-normal" key={index}>
                      {item}
                    </span>
                  ))}
                </p>
                <p className="text-xl font-semibold">
                  Currency:{" "}
                  {currencies?.map((item, index) => (
                    <span className="font-normal" key={index}>
                      {item.name} <span>({item.symbol})</span>
                    </span>
                  ))}
                </p>
                <p className="text-xl font-semibold">
                  Language:{" "}
                  <span className="font-normal">
                    {languages?.map((data) => data.name).join(", ")}
                  </span>
                </p>
              </div>
              <div className="ml-0 md:w-full sm:w-[80%] xl:w-[30rem] mt-10 flex gap-8 items-center flex-wrap ">
                <p className="text-xl font-semibold">Border Countries: </p>
                {borders?.length ? (
                  borders?.map((item, index) => (
                    <div
                      className="self-center mt-1 shadow-lg p-2 rounded"
                      key={index}
                    >
                      <Link to={`/country/${item}`}>{item}</Link>
                    </div>
                  ))
                ) : (
                  <div className="self-center mt-1  shadow-lg p-2 rounded">
                    No Borders ...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
