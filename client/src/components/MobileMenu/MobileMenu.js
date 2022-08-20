import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import downArrow from "../../assets/icons/down-arrow.png";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const [learnMenuClicked, setLearnMenuClicked] = useState(false);
  const [investMenuClicked, setInvestMenuClicked] = useState(false);
  const toggleMenu = (menu, setMenu) => {
    setMenu(!menu);
  };

  return (
    <nav className={"mobile-menu " + (menuOpen && "active")}>
      <ul className="mobile-menu__links">
        <li
          className={
            "mobile-menu__list-item " + (!investMenuClicked && "active-invest")
          }
          onClick={() => toggleMenu(investMenuClicked, setInvestMenuClicked)}
        >
          <div className="mobile-menu__list-header">
            <h3
              className={
                "mobile-menu__list-text " +
                (!investMenuClicked && "active-invest")
              }
            >
              Invest
            </h3>
            <img
              src={downArrow}
              alt="Down arrow"
              className={
                "mobile-menu__icon " + (investMenuClicked && "active-arrow")
              }
            ></img>
          </div>
          {investMenuClicked && (
            <ul className="mobile-menu__invest-list">
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/invest/stocks-and-etfs"
                  className="mobile-menu__invest-item"
                >
                  Stocks & ETFs
                </Link>
              </li>
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/invest/crypto"
                  className="mobile-menu__invest-item"
                >
                  Crypto
                </Link>
              </li>
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/invest/managed-investing"
                  className="mobile-menu__invest-item"
                >
                  Managed Investing
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="mobile-menu__list-item"
          onClick={() => toggleMenu(menuOpen, setMenuOpen)}
        >
          Spend & save
          <Link to="https://www.wealthsimple.com/en-ca/spend"></Link>
        </li>
        <li
          className="mobile-menu__list-item"
          onClick={() => toggleMenu(menuOpen, setMenuOpen)}
        >
          Tax
          <Link to="https://www.wealthsimple.com/en-ca/tax"></Link>
        </li>
        <li
          className={
            "mobile-menu__list-item " + (!learnMenuClicked && "active-invest")
          }
          onClick={() => toggleMenu(learnMenuClicked, setLearnMenuClicked)}
        >
          <div className="mobile-menu__list-header">
            <h3
              className={
                "mobile-menu__list-text " +
                (!learnMenuClicked && "active-invest")
              }
            >
              Learn
            </h3>
            <img
              src={downArrow}
              alt="Down arrow"
              className={
                "mobile-menu__icon " + (learnMenuClicked && "active-arrow")
              }
            ></img>
          </div>
          {learnMenuClicked && (
            <ul className="mobile-menu__invest-list">
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/magazine"
                  className="mobile-menu__invest-item"
                >
                  Magazine
                </Link>
              </li>
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/learn"
                  className="mobile-menu__invest-item"
                >
                  Personal finance 101
                </Link>
              </li>
              <li className="mobile-menu__invest-item">
                <Link
                  to="https://www.wealthsimple.com/en-ca/tool/tax-calculator"
                  className="mobile-menu__invest-item"
                >
                  Income tax calculator
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="mobile-menu__actions">
        <Link
          to="https://my.wealthsimple.com/app/public/signup?locale=en-ca"
          className="mobile-menu__login"
        >
          Log in
        </Link>
        <button className="mobile-menu__button">Download the app</button>
      </div>
    </nav>
  );
}
