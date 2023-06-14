import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";
import HtmlPage from "../pages/HtmlPage";
import Contact from "../components/Contact";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/yazilim-kaynaklari" element={<Home />} />
        <Route path="/yazilim-kaynaklari/iletisim" element={<Contact />} />
        <Route path="/yazilim-kaynaklari/html" element={<HtmlPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
