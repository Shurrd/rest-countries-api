import React from "react";
import Home from "./pages/Home";
import { useGlobalContext } from "./utils/context";

const App = () => {
  const { darkMode } = useGlobalContext();
  return (
    <div>
      {!darkMode ? (
        <div className="dark-back">
          <Home />
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
