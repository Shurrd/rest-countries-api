import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../utils/context";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { data } from "autoprefixer";

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
    <div className="pb-[20vh]">
      <Link to="/">
        <div className="flex flex-row items-center bg-white w-max p-3 pr-7 pl-7 mt-10 mx-8 rounded-md shadow-md">
          <p className="pr-4 text-3xl font-bold">
            <BiArrowBack />
          </p>
          <p className="text-xl">Back</p>
        </div>
      </Link>
      <div className="flex flex-col">
        <img
          className="mt-20 w-[90%] self-center rounded-lg shadow-md"
          src={flags?.png}
          alt={name}
        />
        <div className="flex flex-col gap-3 ml-8">
          <p className="text-3xl mt-7 mb-10 font-semibold">{name}</p>
          <p className="text-xl font-semibold">
            Native Name: <span className="font-normal">{nativeName}</span>
          </p>
          <p className="text-xl font-semibold">
            Population:{" "}
            <span className="font-normal">{population?.toLocaleString()}</span>
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
        <div className="flex flex-col ml-8 mt-10 gap-3">
          <p className="text-xl font-semibold">
            Area:{" "}
            <span className="font-normal">{area?.toLocaleString()} sq</span>
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
                {item.name} {item.symbol}
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
        <div className="ml-8 mt-10 flex gap-8 items-center flex-wrap ">
          <p className="text-xl font-semibold">Border Countries: </p>
          {borders?.map((item, index) => (
            <div
              className="self-center mt-1 bg-white shadow-lg p-2"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
