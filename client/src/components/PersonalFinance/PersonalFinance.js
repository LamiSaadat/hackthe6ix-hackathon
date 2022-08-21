import "./PersonalFinance.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import coin from "../../assets/images/coin.png";

function PersonalFinance() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <div className="card" data-aos="fade-up">
        <div className="card__container">
          <div className="card__content">
            <div className="personal-finance">
              <h2 className="personal-finance__header">
                We want to break down the barriers to financial literacy
              </h2>
            </div>
          </div>
          <div className="card__bottom">
            <img src={coin} alt="coin" className="card__image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalFinance;
