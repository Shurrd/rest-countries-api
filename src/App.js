import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/country/:alpha3Code"
            element={<CountryDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
