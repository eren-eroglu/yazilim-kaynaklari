import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import gif from "../src/assets/gif.gif";

import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPython,
  faJava,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const contactText = "Birini seçin, ücretsiz öğrenin";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(contactText.slice(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === contactText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const [animateIndex, setAnimateIndex] = useState(-1);
  const icons = [faHtml5, faCss3, faJs, faReact, faPython, faJava, faSwift];
  const iconColors = [
    "text-red-500",
    "text-blue-500",
    "text-yellow-500",
    "text-blue-300",
    "text-yellow-400",
    "text-orange-500",
    "text-purple-500",
  ];
  const routes = [
    "/yazilim-kaynaklari/html",
    "/yazilim-kaynaklari/css",
    "/yazilim-kaynaklari/javascript",
    "/yazilim-kaynaklari/react",
    "/yazilim-kaynaklari/python",
    "/yazilim-kaynaklari/java",
    "/yazilim-kaynaklari/swift",
  ];

  useEffect(() => {
    setTimeout(() => {
      const timeoutIds = [];
      const delay = 1000; // Delay between each icon animation in milliseconds

      for (let i = 0; i < icons.length; i++) {
        const timeoutId = setTimeout(() => {
          setAnimateIndex(i);
        }, delay * i);
        timeoutIds.push(timeoutId);
      }

      // Clear timeouts on component unmount
      return () => {
        timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      };
    }, 3500);
  }, []);

  return (
    <div className="container mx-auto h-screen lg:w-1/2 flex flex-col justify-center items-center pe-3 ps-3 shadow-2xl drop-shadow-2xl">
      <div
        className="flex items-center bg-black rounded-3xl md:p-16 p-5 bg-opacity-50 flex-col top-32 absolute drop-shadow-2xl shadow-2xl"
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="md:text-5xl text-center text-2xl text-black bg-purple-400 bg-opacity-30 rounded-3xl p-3
         mb-6"
        >
          {displayedText}
          <span className="blinking-line"></span>
        </div>
        <div className="flex flex-wrap justify-center">
          {icons.map((icon, index) => (
            <Link to={routes[index]} key={index}>
              <div
                className={`${
                  animateIndex >= index ? "text-focus-in" : "hidden"
                }`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`md:text-8xl text-5xl m-3 hover:saturate-150 hover:scale-110 transition-all duration-200 bg-black rounded-xl p-4 bg-opacity-50   ${iconColors[index]}`}
                />
                <span className="text-center text-white"></span>
              </div>
            </Link>
          ))}
        </div>
      </div> <footer className=" text-white text-center  w-full bottom-0 absolute">
        <p>&copy; 2023 Eren Eroglu.</p>
      </footer>
     
    </div>
  );
}

export default Home;
