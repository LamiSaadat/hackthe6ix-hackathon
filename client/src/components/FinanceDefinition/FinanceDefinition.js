import "./FinanceDefinition.scss";
import { HashLink as Link } from "react-router-hash-link";
import piggyIcon from "../../assets/images/piggy-bank.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function FinanceDefinition() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <div className="card" data-aos="fade-up">
        <div className="card__container card__container--blue">
          <div className="card__content">
            <div className="finance">
              <h2 className="finance__header">What is personal finance?</h2>
              <p className="finance__content">
                Personal finance is the art of managing your money. How much to
                save, where to invest and how to budget. None of us are born
                knowing how to put together a smart, simple financial plan.
                That's why we're here.
              </p>
              <div className="finance__button">
                <Link to="#options" className="button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="card__bottom">
            <img
              src={piggyIcon}
              alt="coin"
              className="card__image finance__image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceDefinition;
