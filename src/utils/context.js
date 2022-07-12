import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://restcountries.com/v2/all";
const regionUrl = "https://restcountries.com/v2/all?fields=region";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error, "error"));
  }, [url]);

  useEffect(() => {
    fetch(regionUrl)
      .then((resp) => resp.json())
      .then((item) => {
        setRegions(item);
      });
  }, []);

  const filterItems = (region) => {
    const newItems = data.filter((item) => item.region === region);
    setData(newItems);
    console.log(newItems);
  };

  return (
    <AppContext.Provider value={{ data, regions, setData, filterItems }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
