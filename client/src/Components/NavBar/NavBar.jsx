import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/form">Form</Link>
    </>
  );
};

export default NavBar;
