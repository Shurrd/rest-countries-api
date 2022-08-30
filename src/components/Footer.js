import React from "react";
import { useGlobalContext } from "../utils/context";

const Footer = () => {
  const { darkMode } = useGlobalContext();
  return (
    <section>
      {darkMode ? (
        <div className=" flex flex-col justify-center items-center gap-2 py-3 bg-white">
          <p>
            Challenge by{" "}
            <span className="text-red-500 font-bold underline">
              Front end Mentor
            </span>
          </p>
          <p>
            Made with love by{" "}
            <a
              href="https://github.com/Shurrd"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 font-semibold underline"
            >
              Abraham
            </a>
          </p>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center gap-2 dark-element py-3">
          <p className="text-white">
            Challenge by{" "}
            <span className="text-red-200 font-bold underline">
              Front end Mentor
            </span>
          </p>
          <p className="text-white">
            Made with love by{" "}
            <a
              href="https://github.com/Shurrd"
              target="_blank"
              rel="noreferrer"
              className="text-red-200 font-semibold underline"
            >
              Abraham
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default Footer;
