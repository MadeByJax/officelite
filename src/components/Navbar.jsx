import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="container">
        <div className="header__container">
          <a href="#/">
            <img className="header__logo" src={logo} alt="" />{" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
