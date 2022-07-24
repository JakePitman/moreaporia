import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const AppNavigation = () => {
  return (
    <ul>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  );
};

export default AppNavigation;
