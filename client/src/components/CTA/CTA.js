import React from "react";
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
            <a
              href="https://my.wealthsimple.com/app/public/signup?locale=en-ca"
              className="cta-card__button"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
