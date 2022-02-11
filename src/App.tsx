import React, { useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import OpeningAnimation from "./components/OpeningAnimation";

function App() {
  document.title = "Moreaporia";

  const [openingAnimationCompleted, setOpeningAnimationCompleted] =
    useState(false);
  return (
    <div className="App">
      {openingAnimationCompleted ? (
        <>
          <LandingPage />
          <AboutPage />
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
