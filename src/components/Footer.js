import React from "react";
import { useGlobalContext } from "../utils/context";

const Footer = () => {
  const { darkMode } = useGlobalContext();

  return (
    <Footer>
      {!darkMode ? (
        <div className="dark-element">Footer</div>
      ) : (
        <div>Footer</div>
      )}
    </Footer>
  );
};

export default Footer;
