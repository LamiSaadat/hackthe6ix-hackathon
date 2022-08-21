import React from "react";
import "./Options.scss";
import { Link } from "react-router-dom";

function Options() {
  return (
    <>
      <div className="options-card">
        <div className="options-card__container">
          <div className="options-card__content">
            <h2>What would you like to learn more about?</h2>
          </div>
          <div className="options-card__bottom">
            <Link to="/" className="options-card__button">
              Investing 101
            </Link>
            <Link to="/" className="options-card__button">
              Taxes
            </Link>
            <Link to="/" className="options-card__button">
              Types of accounts
            </Link>
            <Link to="/" className="options-card__button">
              Types of investments
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
