import { Link } from "react-router-dom";
import "../src/index.css";
import Logo from "../src/assets/logo.png";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "black" : "light"
    );
  };

  return (
    <nav className="bg-black px-4 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/yazilim-kaynaklari" className="flex items-center">
          <div>
       
            <img
              className="h-16 md:h-32 hover:brightness-110 hover:saturate-150 duration-200 transition-all cursor-pointer"
              src={Logo}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex mt-4 md:mt-0">
          <Link
            to="/yazilim-kaynaklari/iletisim"
            className="text-white hover:text-pink-200 transition-colors duration-300 block md:inline-block md:mt-0 md:ml-4 md:text-3xl text-lg text-secondary animated-link"
          >
            İletişim
          </Link>
          <Link
            to="/yazilim-kaynaklari/hakkinda"
            className="text-white  hover:text-pink-200 transition-colors duration-300 block md:inline-block md:mt-0 md:ml-8 md:text-3xl text-lg ps-5 text-pink-500 animated-link"
          >
            Hakkında
          </Link>
    
        </div>   <div className="toggleButton w-full">
      <div className="containeriki text-center ms-4 bg-pink-400 rounded-2xl shadow-2xl drop-shadow-2xl">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <div></div>
        </label>
      </div>
    </div>
      </div>  
    </nav>
  );
}

export default Navbar;
