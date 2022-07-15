import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";
import Footer from "./components/Footer";

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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
