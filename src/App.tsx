import "./App.scss";
import { AppNavigation, AppRouter } from "./components/AppNavigation";
import { BrowserRouter as Router } from "react-router-dom";

import { BrowserProvider } from "./shared/browserContext";
import useWindowDimensions from "./shared/useWindowDimensions";

// cache first AboutPage image before AboutPage loads
import firstAboutImage from "./components/AboutPage/pictures/castle_hill.png";
const img = new Image();
img.src = firstAboutImage;

function App() {
  document.title = "Moreaporia";
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <BrowserProvider value={{ isLandscape }}>
      <Router>
        <div className="App">
          <AppNavigation />
          <AppRouter />
        </div>
      </Router>
    </BrowserProvider>
  );
}

export default App;
