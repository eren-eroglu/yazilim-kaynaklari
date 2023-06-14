import React from "react";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
const NotFound = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
        404 - Not Found
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-10">
        Haydaaaa. Aradığınız sayfa bulunamadı.
      </p>
      <FaRobot className="text-9xl mb-6" />
      <Link
        to="/yazilim-kaynaklari"
        className="px-6 py-3 bg-accent rounded-md text-neutral font-bold hover:bg-blue-600 transition-colors duration-300 flex"
      >
               <BiArrowBack className="mt-1 me-2"/>  Geri dön
      </Link>
    </div>
  );
};

export default NotFound;
