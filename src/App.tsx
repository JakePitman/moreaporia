import "./App.scss";
import { AppNavigation, AppRouter } from "./components/AppNavigation";
import { BrowserRouter as Router } from "react-router-dom";

// cache first AboutPage image before AboutPage loads
import kayakImage from "./components/AboutPage/pictures/kayak.png";
const img = new Image();
img.src = kayakImage;

function App() {
  document.title = "Moreaporia";

  return (
    <Router>
      <div className="App">
        <AppNavigation />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
