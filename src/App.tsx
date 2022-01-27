import React from "react";
import "./App.scss";
import ComingSoon from "./components/ComingSoon";

function App() {
  document.title = "Moreaporia";
  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
}

export default App;
