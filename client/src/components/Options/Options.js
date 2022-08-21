import React from "react";
import "./Options.scss";
import { HashLink as Link } from "react-router-hash-link";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Options() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <div className="options-card" id="options" data-aos="fade-up">
        <div className="options-card__container">
          <div className="options-card__content">
            <h2>What would you like to learn more about?</h2>
          </div>
          <div className="options-card__bottom">
            <Link to="#investing" className="options-card__button">
              Investing 101
            </Link>
            <Link to="#taxes" className="options-card__button">
              Taxes
            </Link>
            <Link to="#account-types" className="options-card__button">
              Types of accounts
            </Link>
            <Link to="#investment-types" className="options-card__button">
              Types of investments
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
