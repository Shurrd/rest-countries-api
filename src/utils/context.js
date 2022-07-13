import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://restcountries.com/v2/all";
const regionUrl = "https://restcountries.com/v2/all?fields=region";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error, "error"));
  }, []);

  useEffect(() => {
    fetch(regionUrl)
      .then((resp) => resp.json())
      .then((item) => {
        setRegions(item);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        regions,
        setData,
        searchInput,
        searchItems,
        filteredResults,
        darkModeHandler,
        darkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
