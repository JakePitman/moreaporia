import { Routes, Route } from "react-router-dom";

import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ProjectsPage from "../ProjectsPage";
import ContactPage from "../ContactPage";
import OpeningAnimation from "../OpeningAnimation";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<OpeningAnimation />} />
    <Route path="/home" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default AppRouter;
