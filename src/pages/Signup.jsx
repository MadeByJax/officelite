import React from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <Navbar />
        <div className="signup__columns">
          <div>
            <h1 className="signup__title">Work smarter. Save time.</h1>
            <p className="signup__description">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
            <h3 className="signup__date">
              Coming <span>28 Jan 2024</span>
            </h3>
            <div className="timer__container">
            <Timer />
            </div> 
          </div>
          <form className="form" action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
            <select className="form__select" name="" id="">
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="ultimate">Ultimate</option>
            </select>
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Company" />
            <button className="form__button">Get on the list</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
