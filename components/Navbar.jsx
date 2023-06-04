import React from "react";
import { Link } from "react-router-dom";
import "../src/index.css";

function Navbar() {
  return (
    <nav className="bg-black px-4 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div className="flex items-center">
          <div>
            {" "}
            <img
              className=" mr-2 md:h-32 hover:brightness-110 hover:saturate-150 duration-200 transition-all hover:cursor-pointer"
              src="../src/assets/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 montserrat">
          <a
            href="#team"
            className="text-white hover:text-gray-300 transition-colors duration-300 block md:inline-block md:mt-0 md:ml-4 text-4xl text-pink-500 "
          >
            Team
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors duration-300 block md:inline-block md:mt-0 md:ml-8 text-4xl text-pink-500"
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
