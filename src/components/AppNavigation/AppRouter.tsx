import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import OpeningAnimation from "../OpeningAnimation";

const AppRouter = () => (
  <Router>
    <div className="App">
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </ul>
      <Routes>
        <Route path="/" element={<OpeningAnimation />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
