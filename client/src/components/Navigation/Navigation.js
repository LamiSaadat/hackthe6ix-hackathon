import "./Navigation.scss";
import logo from "../../assets/images/wealthsimple-logo.png";
import { Link } from "react-router-dom";
import downArrow from "../../assets/icons/down-arrow.png";
import InvestMenu from "../InvestMenu/InvestMenu";
import LearnMenu from "../LearnMenu/LearnMenu";

function Navigation({
  menuOpen,
  setMenuOpen,
  investMenuOpen,
  setInvestMenuOpen,
  learnMenuOpen,
  setLearnMenuOpen,
}) {
  return (
    <nav className="nav">
      <main className={"nav__main " + (menuOpen && "active")}>
        <Link to="/">
          <img
            src={logo}
            className="nav__logo"
            alt="logo"
            onClick={() => setMenuOpen(false)}
          />
        </Link>
        <ul className="nav__list">
          <li
            className="nav__list-item nav__list-item--hover"
            onMouseEnter={() =>
              setInvestMenuOpen(!investMenuOpen) && setLearnMenuOpen(false)
            }
          >
            Invest
            <img src={downArrow} alt="Down arrow" className="nav__icon"></img>
          </li>
          <li className="nav__list-item">
            <a
              href="https://www.wealthsimple.com/en-ca/spend"
              target="_blank"
              rel="noreferrer"
            >
              Spend & save
            </a>
          </li>
          <li>
            <a
              href="https://www.wealthsimple.com/en-ca/tax"
              target="_blank"
              rel="noreferrer"
            >
              Tax
            </a>
          </li>
          <li
            className="nav__list-item nav__list-item--hover"
            onMouseEnter={() =>
              setLearnMenuOpen(!learnMenuOpen) && setInvestMenuOpen(false)
            }
          >
            Learn
            <img src={downArrow} className="nav__icon" alt="Down arrow"></img>
          </li>
        </ul>
        <div className="nav__actions">
          <a
            href="https://my.wealthsimple.com/app/public/signup?locale=en-ca"
            target="_blank"
            rel="noreferrer"
          >
            Log in
          </a>
          <Link to="/language" className="nav__button">
            Get Started
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger__line1"></span>
          <span className="hamburger__line2"></span>
        </div>
      </main>
      {investMenuOpen && (
        <InvestMenu
          investMenuOpen={investMenuOpen}
          setInvestMenuOpen={setInvestMenuOpen}
        />
      )}
      {learnMenuOpen && (
        <LearnMenu
          learnMenuOpen={learnMenuOpen}
          setLearnMenuOpen={setLearnMenuOpen}
        />
      )}
    </nav>
  );
}

export default Navigation;
