import React, { useState, useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import OpeningAnimation from "./components/OpeningAnimation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// cache first AboutPage image before AboutPage loads
import kayakImage from "./components/AboutPage/pictures/kayak.png";
const img = new Image();
img.src = kayakImage;

function App() {
  document.title = "Moreaporia";
  const aboutPageRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OpeningAnimation />} />
          <Route
            path="/home"
            element={
              <LandingPage
                scrollToAboutPage={() =>
                  aboutPageRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              />
            }
          />
          <Route path="/about" element={<AboutPage ref={aboutPageRef} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
