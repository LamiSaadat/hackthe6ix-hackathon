import "./PersonalFinance.scss";

import coin from "../../assets/images/coin.png";

function PersonalFinance() {
  return (
    <>
      <div className="card">
        <div className="card__container">
          <div className="card__content">
            <h2>We want to break down the barriers to financial literacy</h2>
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
