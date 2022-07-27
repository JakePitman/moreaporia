import "./App.scss";
import { AppNavigation, AppRouter } from "./components/AppNavigation";
import { BrowserRouter as Router } from "react-router-dom";

import { BrowserProvider } from "./shared/browserContext";
import useWindowDimensions from "./shared/useWindowDimensions";

// cache first AboutPage image before AboutPage loads
import kayakImage from "./components/AboutPage/pictures/kayak.png";
const img = new Image();
img.src = kayakImage;

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
