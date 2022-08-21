import React from "react";
import "./CTA.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function CTA() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <div className="cta-card" data-aos="fade-up">
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
