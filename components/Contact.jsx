import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ppImage from "../src/assets/pp.png";
import { IconContext } from "react-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiCode, DiCodeBadge } from "react-icons/di";
import { RiComputerLine } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { BiBrain, BiGame } from "react-icons/bi";
import { GiPencilRuler } from "react-icons/gi";
import { ImFileText2 } from "react-icons/im";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { GrYoutube, GrTwitter } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Contact() {
  return (
    <div className="container mx-auto px-4 h-screen ">
      <div className="flex items-center justify-center mt-16">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-16 text-white">
          <div className="flex items-center justify-center mb-8">
            <img
              src={ppImage}
              alt="Profile Picture"
              className="rounded-full w-48 h-48 border-blue-300 border-2"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">İletişime Geçin 👋 </h2>
          <p className="text-gray-300 mb-6">Ben Eren Eroğlu!😊 Kod yazmayı çok seviyorum 🤩 Ulaşmak için:  </p>
          <div className="flex flex-col md:flex-row">
            <SocialLink
              icon={<IoLogoLinkedin />}
              href="https://www.linkedin.com/in/eroglueren/"
              text="LinkedIn"
              color="#0e76a8"
            />
            <SocialLink
              icon={<GrTwitter />}
              href="https://twitter.com/35ereneroglu"
              text="Twitter"
              color="#1da1f2"
            />
            <SocialLink
              icon={<GrYoutube />}
              href="https://www.youtube.com/channel/UCotJX6uiRsp9zbqeP6KKTzQ"
              text="YouTube"
              color="#ff0000"
            />
            <SocialLink
              icon={<AiFillMediumCircle />}
              href="https://medium.com/@ereneroglu"
              text="Medium"
              color="#000000"
            />
            <SocialLink
              icon={<AiFillGithub />}
              href="https://github.com/eren-eroglu"
              text="GitHub"
              color="#ffffff"
            />
            <SocialLink
              icon={<SiGmail />}
              href="mailto:ereneroglu.dev@gmail.com"
              text="Email"
              color="#d14836"
            />
          </div>

          <Link
            to="/yazilim-kaynaklari"
            className="p-5 absolute py-3 bg-accent rounded-md text-white font-bold hover:bg-blue-600 transition-colors duration-300 mt-2 flex"
          >
            <BiArrowBack className="mt-1 me-2  "/>  Geri dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, href, text, color }) {
  return (
    <div className="flex items-center mb-4 md:mb-0 md:mr-4">
      <IconContext.Provider value={{ color: color, size: 24 }}>
        {icon}
      </IconContext.Provider>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white ml-2"
      >
        {text}
      </a>
    </div>
  );
}

function TimelineItem({ date, icon, title, subtitle, description }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: "#333333",
        color: "#ffffff",
        boxShadow: "none",
      }}
      contentArrowStyle={{ display: "none" }}
      date={date}
      iconStyle={{ background: "#ffffff", color: "#333333" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-title">{title}</h3>
      <h4 className="vertical-timeline-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default Contact;
