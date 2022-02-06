import React from "react";
import "./App.scss";
// import ComingSoon from "./components/ComingSoon/ComingSoon";
import OpeningAnimation from "./components/OpeningAnimation";

function App() {
  document.title = "Moreaporia";
  return (
    <div className="App">
      {/* <ComingSoon /> */}
      <OpeningAnimation />
    </div>
  );
}

export default App;
