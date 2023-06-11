import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HtmlPage() {
  const resources = [
    {
      title: "W3Schools",
      description:
        "Yeni başlayanlar için kapsamlı bir hızlandırılmış HTML kursu.",
      link: "https://www.w3schools.com/html/",
    },
    {
      title: "HTML Cheat Sheet",
      description:
        "HTML etiketleri ve öznitelikleri için kullanışlı bir hızlandırma sayfası.",
      link: "https://www.learn-html.org/",
    },
    {
      title: "HTML5 Referans Rehberi",
      description: "HTML5 özellikleri için detaylı bir referans rehberi.",
      link: "https://www.freecodecamp.org/news/learn-html-beginners-course/",
    },
    {
      title: "HTML İpuçları ve Püf Noktaları",
      description:
        "HTML ile ilgili ipuçları, püf noktaları ve pratik örnekler.",
      link: "https://markodenic.com/html-tips/",
    },
    {
      title: "Mozilla Developer Network (MDN)",
      description:
        "Web teknolojileri hakkında kapsamlı dokümantasyon ve rehberler.",
      link: "https://developer.mozilla.org/tr/docs/Web/HTML",
    },
    {
      title: "HTML Validator",
      description:
        "HTML belgelerini doğrulamak ve hataları bulmak için çevrimiçi bir araç.",
      link: "https://validator.w3.org/",
    },
  ];

  return (
    <>   <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Ücretsiz HTML Kaynakları</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between text-accent"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
              <p className="text-gray-300 mb-4">{resource.description}</p>
            </div>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-500 text-black rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              Siteye Git
            </a>
          </div>
        ))}
      </div>
      </div>  <div className="text-center w-screen ">     <Link
  to="/yazilim-kaynaklari"
  className=" mt-4 px-4 py-2 text-white bg-accent bg-opacity-50 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
>
  <svg
    className="inline-block w-4 h-4 mr-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
  Geri Dön
</Link>
</div>
</>

  );
}

export default HtmlPage;
