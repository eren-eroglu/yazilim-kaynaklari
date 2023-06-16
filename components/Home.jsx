import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import gif from "../src/assets/gif.gif";
import bgGif from "../src/assets/bggif.gif";
import Tag from "./Tag";
import { FaRobot } from "react-icons/fa";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
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
  const contactText = "Birini seçin, ücretsiz öğrenin 💻";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(contactText.slice(0, currentIndex + 1));
      currentIndex += 2;
      if (currentIndex === contactText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const [animateIndex, setAnimateIndex] = useState(-1);
  const icons = [faHtml5, faCss3, faJs, faReact, faPython];
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
      const delay = 500; // Delay between each icon animation in milliseconds

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
    }, 2000);
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* iframe inş */
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        const captchaElement = iframeDoc.getElementById("captchaElement");
        const otherContent = iframeDoc.querySelectorAll(
          ":not(#captchaElement)"
        );
        for (let i = 0; i < otherContent.length; i++) {
          otherContent[i].style.display = "none";
        }
      };
    }
  }, []);

  const handleSubmit = () => {
    const iframeWindow = iframeRef.current.contentWindow;
    iframeWindow.document.getElementById("myForm").submit();
  };
  return (
    <>
      <div className="w-full flex justify-center items-center text-center mt-2">
        {" "}
        <button
          className="flex items-center  justify-center p-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          onClick={togglePopup}
        >
          <FaRobot className="" />
        </button>
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          id="ai-chatbot-popup"
        >
          <div
            className="bg-pink-500 bg-opacity-50 rounded-lg p-4"
            style={{ width: "450px", height: "800px" }}
            ref={popupRef}
          >
            <button
              onClick={togglePopup}
              className=" top-0 right-0 p-2 w-full text-white z-50 bg-black"
            >
              Kapat
            </button>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="95%"
              src="https://talkai.info/chat/"
            ></iframe>
          </div>
        </div>
      )}
      {/* Rest of the code */}

      {/* Rest of the code */}
      <main
        className="flex mt-5  xl:flex xl:flex-row flex-col  pb-28"
        id="main-tag"
      >
        <div className="mx-auto  flex flex-col pe-3 ps-3 shadow-2xl drop-shadow-2xl  lg:w-1/2 h-full w-full">
          {" "}
          <Tag name="Yazılım Dilleri" />
          <div
            className="flex items-center bg-black rounded-3xl md:p-16 p-5 bg-opacity-75 flex-col   drop-shadow-2xl shadow-2xl w-full min-h-[350px] md:min-h-[500px] "
            style={{
              backgroundImage: `url(${gif})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:text-5xl text-center text-2xl text-black bg-purple-400 bg-opacity-50 rounded-3xl p-3 mb-6 ">
              {displayedText}
              <span className="blinking-line"></span>
            </div>
            <div className="flex flex-wrap justify-center mt-5">
              {icons.map((icon, index) => (
                <Link to={routes[index]} key={index}>
                  <div
                    className={`${
                      animateIndex >= index ? "text-focus-in" : "hidden"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className={`md:text-8xl text-5xl m-3 hover:saturate-150 hover:scale-110 transition-all duration-200 bg-black rounded-xl p-4 bg-opacity-50 ${iconColors[index]}`}
                    />
                    <span className="text-center text-white"></span>
                  </div>
                </Link>
              ))}
            </div>
            <footer className="text-white text-center  bottom-0 absolute">
              <p>&copy; 2023 Eren Eroglu.</p>
            </footer>
          </div>
        </div>

        <div className="mx-auto  lg:w-1/2 flex flex-col pe-3 ps-3 shadow-2xl drop-shadow-2xl w-full ">
          {" "}
          <Tag name="Yol Haritaları" />
          <div
            className="flex bg-black rounded-3xl md:p-16 p-5  flex-col drop-shadow-2xl shadow-2xl w-full h-full"
            style={{
              backgroundImage: `url(${bgGif})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:text-5xl text-center text-2xl text-black bg-purple-400 bg-opacity-50 rounded-3xl p-3 mb-6 h-full">
              Veya önce yol haritanızı belirleyin 😊
              <span className="blinking-line"></span>
            </div>
            <div className="flex mx-auto flex-col gap-4 h-full">
              <a
                href="/front-end-roadmap"
                className="text-white text-center bg-purple-600 rounded-lg p-3 hover:bg-purple-700"
              >
                Front-End Roadmap 🎨
              </a>
              <a
                href="/back-end-roadmap"
                className="text-white text-center bg-purple-600 rounded-lg p-3 hover:bg-purple-700"
              >
                Back-End Roadmap 🛠️
              </a>
              <a
                href="/full-stack-roadmap"
                className="text-white text-center bg-purple-600 rounded-lg p-3 hover:bg-purple-700"
              >
                Full-Stack Roadmap 🔀
              </a>
            </div>
          </div>
        </div>
      </main>
      <section className="h-full w-full">
        <div className="absolute bottom-0  flex justify-center items-center content-center  py-4 sticky">
          <p className="me-2">
            <AiFillGithub size={20} />
          </p>{" "}
          <a
            href="https://github.com/eren-eroglu?tab=repositories"
            className="text-lg underline bg-pink-500  p-2 rounded-full"
          >
            Diğer projelerime göz atın!
          </a>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Home;
