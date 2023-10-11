import React from "react";
import "./Header.css";
import charts from "../assets/illustration-charts.svg";
import logo from "../assets/logo.svg";
import circles from "../assets/bg-pattern-header.svg";

const Header = () => {
  return (
    <div className="header container">
      <header>
        <div className="header__container">
          <img className="header__logo" src={logo} alt="" />
        </div>
      </header>

      <section className="hero__section">

        <img className="hero__charts" src={charts} alt="" />
        <div className="hero__info">
          <h1 className="hero__title">
            A simple solution to complex tasks is coming soon
          </h1>
          <p className="hero__description">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
          <button className="hero__button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Header;
