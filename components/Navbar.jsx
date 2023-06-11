import React from "react";
import { Link } from "react-router-dom";
import "../src/index.css";

function Navbar() {
  return (
    <nav className="bg-black px-4 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/yazilim-kaynaklari" className="flex items-center">
          <div>
            <img
              className="h-16 md:h-32 hover:brightness-110 hover:saturate-150 duration-200 transition-all cursor-pointer"
              src="../src/assets/logo.png"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex mt-4 md:mt-0">
          <Link
            to="/iletisim"
            className="text-white hover:text-primary transition-colors duration-300 block md:inline-block md:mt-0 md:ml-4 md:text-3xl text-lg text-secondary animated-link"
          >
            İletişim
          </Link>
          <Link
            to="/hakkinda"
            className="text-white hover:text-primary transition-colors duration-300 block md:inline-block md:mt-0 md:ml-8 md:text-3xl text-lg ps-5 text-pink-500 animated-link"
          >
            Hakkında
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
