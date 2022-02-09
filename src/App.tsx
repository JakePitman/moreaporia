import React, { useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import OpeningAnimation from "./components/OpeningAnimation";

function App() {
  document.title = "Moreaporia";

  const [openingAnimationCompleted, setOpeningAnimationCompleted] =
    useState(false);
  return (
    <div className="App">
      {openingAnimationCompleted ? (
        <LandingPage />
      ) : (
        <OpeningAnimation
          setCompleted={() => setOpeningAnimationCompleted(true)}
        />
      )}
    </div>
  );
}

export default App;
