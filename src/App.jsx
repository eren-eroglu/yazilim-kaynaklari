import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";
import HtmlPage from "../pages/HtmlPage";
import CssPage from "../pages/CssPage";
import Javascript from "../pages/Javascript";
import React from "../pages/React";
import Python from "../pages/Python";
import Contact from "../components/Contact";
import About from "../components/About";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/yazilim-kaynaklari" element={<Home />} />
        <Route path="/yazilim-kaynaklari/iletisim" element={<Contact />} />
        <Route path="/yazilim-kaynaklari/hakkinda" element={<About />} />
        <Route path="/yazilim-kaynaklari/html" element={<HtmlPage />} />
        <Route path="/yazilim-kaynaklari/css" element={<CssPage />} />
        <Route path="/yazilim-kaynaklari/javascript" element={<Javascript />} />
        <Route path="/yazilim-kaynaklari/react" element={<React />} />
        <Route path="/yazilim-kaynaklari/python" element={<Python />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
