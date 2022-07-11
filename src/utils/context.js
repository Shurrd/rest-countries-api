import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://restcountries.com/v2/all";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error, "error"));
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
