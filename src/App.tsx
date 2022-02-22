import React, { useState, useRef } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import OpeningAnimation from "./components/OpeningAnimation";

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
              aboutPageRef.current?.scrollIntoView();
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
