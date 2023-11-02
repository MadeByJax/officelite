import React from "react";
import "./Plans.css";
import Timer from "./Timer";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="plans">
      <div className="container plans__columns">
        <div className="card">
          <div className="card__left">
            <h3 className="card__tier">Basic</h3>
            <h2 className="card__price">Free</h2>
            <p>Up to 5 users for free</p>

            <button className="card__button tablet__button">
              <Link to="/signup">Try for Free</Link>
            </button>
          </div>
          <ul className="features">
            <li>Basic document collaboration</li>
            <li>2 GB storage</li>
            <li>Great Security and support</li>
          </ul>

          <button className="card__button">
            <Link to="/signup">Try for Free</Link>
          </button>
        </div>
        <div className="card popular">
          <div className="card__left">
            <h3 className="card__tier">Pro</h3>
            <h2 className="card__price">$9.99</h2>
            <p>Per user, billed monthly</p>

            <button className="card__button tablet__button">
              <Link to="/signup">Try for Free</Link>
            </button>
          </div>
          <ul className="features">
            <li>All essential integrations</li>
            <li>50 GB storage</li>
            <li>More control and insights</li>
          </ul>

          <button className="card__button">
            <Link to="/signup">Try for Free</Link>
          </button>
        </div>
        <div className="card">
          <div className="card__left">
            <h3 className="card__tier">Ultimate</h3>
            <h2 className="card__price">$19.99</h2>
            <p>Per user, billed monthly</p>

            <button className="card__button tablet__button">
              <Link to="/signup">Try for Free</Link> Try for Free
            </button>
          </div>
          <ul className="features">
            <li>Robust work management</li>
            <li>100 GB storage</li>
            <li>VIP support</li>
          </ul>

          <button className="card__button">
            <Link to="/signup">Try for Free</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
