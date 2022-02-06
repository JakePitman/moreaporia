import React, { useState } from "react";
import "./App.scss";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import OpeningAnimation from "./components/OpeningAnimation";

function App() {
  document.title = "Moreaporia";

  const [openingAnimationCompleted, setOpeningAnimationCompleted] =
    useState(false);
  return (
    <div className="App">
      {openingAnimationCompleted ? (
        <ComingSoon />
      ) : (
        <OpeningAnimation
          setCompleted={() => setOpeningAnimationCompleted(true)}
        />
      )}
    </div>
  );
}

export default App;
