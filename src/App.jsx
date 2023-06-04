import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";


function App() {
  return (
    <Router>
     
        <Navbar /> {/* Place the Navbar component here */}

      <Routes>
      <Route path="/yazilim-kaynaklari" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
