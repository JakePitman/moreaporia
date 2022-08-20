import { Routes, Route } from "react-router-dom";

import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ProjectsPage from "../ProjectsPage";
import OpeningAnimation from "../OpeningAnimation";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<OpeningAnimation />} />
    <Route path="/home" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
  </Routes>
);

export default AppRouter;
