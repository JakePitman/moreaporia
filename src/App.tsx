import React, { useState, useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import OpeningAnimation from "./components/OpeningAnimation";

import kayakImage from "./components/AboutPage/pictures/kayak.png";

function App() {
  document.title = "Moreaporia";
  const aboutPageRef = useRef<HTMLDivElement>(null);

  const [openingAnimationCompleted, setOpeningAnimationCompleted] =
    useState(false);

  const img = new Image();
  img.src = "./components/AboutPage/pictures/kayak.png";

  return (
    <div className="App">
      {/* TODO: Try new Image(); img.src */}
      <img src={kayakImage} style={{ display: "none" }} alt="" />
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
