import React from "react";
import { Link } from "react-router-dom";
import "./CTA.scss";

function CTA() {
  return (
    <>
      <div className="cta-card">
        <div className="cta-card__container">
          <div className="cta-card__content">
            <h2>Ready to start?</h2>
          </div>
          <div className="cta-card__bottom">
            <Link to="https://my.wealthsimple.com/app/public/signup?locale=en-ca">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
