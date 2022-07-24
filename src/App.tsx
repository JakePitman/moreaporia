import React, { useRef } from "react";
import "./App.scss";
import { AppRouter } from "./components/AppNavigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// cache first AboutPage image before AboutPage loads
import kayakImage from "./components/AboutPage/pictures/kayak.png";
const img = new Image();
img.src = kayakImage;

function App() {
  document.title = "Moreaporia";

  return <AppRouter />;
}

export default App;
