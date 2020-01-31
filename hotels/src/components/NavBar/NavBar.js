import React from "react";
import "./NavBar.scss";
import logo from "./travel-logo.jpeg"


const NavBar = () => {
  return <nav className="navbar">
    <img src={logo} className="logo" alt="hotel logo"></img>
  </nav>;
};

export default NavBar;
