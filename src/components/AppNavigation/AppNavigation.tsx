import React from "react";
import { Link, useLocation } from "react-router-dom";

const AppNavigation = () => {
  if (useLocation().pathname === "/") return <></>;
  return (
    <ul>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  );
};

export default AppNavigation;
