import React, { useState, useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import OpeningAnimation from "./components/OpeningAnimation";

// cache first AboutPage image before AboutPage loads
import kayakImage from "./components/AboutPage/pictures/kayak.png";
const img = new Image();
img.src = kayakImage;

function App() {
  document.title = "Moreaporia";
  const aboutPageRef = useRef<HTMLDivElement>(null);

  const [openingAnimationCompleted, setOpeningAnimationCompleted] =
    useState(false);

  return (
    <div className="App">
      {openingAnimationCompleted ? (
        <>
          <LandingPage
            scrollToAboutPage={() => {
              aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <AboutPage ref={aboutPageRef} />
        </>
      ) : (
        <OpeningAnimation
          setCompleted={() => setOpeningAnimationCompleted(true)}
        />
      )}
    </div>
  );
}

export default App;
