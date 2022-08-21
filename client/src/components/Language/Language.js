import React from "react";
import "./Language.scss";
import canada from "../../assets/icons/canada-icon.png";
import china from "../../assets/icons/china-icon.png";
import philipines from "../../assets/icons/philipines-icon.png";
import india from "../../assets/icons/india-icon.png";
import world from "../../assets/icons/world-icon.png";

function Language() {
  return (
    <>
      <div className="lang-card">
        <div className="lang-card__container">
          <div className="lang-card__content">
            <h2>Choose your language</h2>
          </div>
          <div className="lang-card__bottom">
            <div className="lang-card__img-container">
              <img
                src={canada}
                alt="canada"
                className="lang-card__image lang-card__image-1"
              />
              <p>English</p>
              <p>Français</p>
            </div>
            <div className="lang-card__img-container">
              <img
                src={china}
                alt="china"
                className="lang-card__image lang-card__image-2"
              />
              <p>普通话</p>
              <p>廣東話</p>
            </div>
            <div className="lang-card__img-container">
              <img
                src={philipines}
                alt="philipines"
                className="lang-card__image lang-card__image-3"
              />
              <p>Tagalog</p>
            </div>
            <div className="lang-card__img-container">
              <img
                src={india}
                alt="india"
                className="lang-card__image lang-card__image-4"
              />
              <p>Hindi</p>
            </div>
            <div className="lang-card__img-container">
              <img
                src={world}
                alt="world"
                className="lang-card__image lang-card__image-5"
              />
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Language;
