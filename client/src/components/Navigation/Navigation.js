import "./Navigation.scss";
import logo from "../../assets/images/wealthsimple-logo.png";
import { Link } from "react-router-dom";
import downArrow from "../../assets/icons/down-arrow.png";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="https://www.wealthsimple.com/">
        <img src={logo} className="nav__logo"></img>
      </Link>
      <ul className="nav__list">
        <li className="nav__list-item">
          Invest
          <img src={downArrow} alt="Down arrow" className="nav__icon"></img>
        </li>
        <Link to="https://www.wealthsimple.com/en-ca/spend">Spend & save</Link>
        <Link to="https://www.wealthsimple.com/en-ca/tax">Tax</Link>
        <li className="nav__list-item">
          Learn
          <img src={downArrow} className="nav__icon" alt="Down arrow"></img>
        </li>
      </ul>
      <div className="nav__actions">
        <Link to="https://my.wealthsimple.com/app/public/signup?locale=en-ca">
          Log in
        </Link>
        <button className="nav__button">Download the app</button>
      </div>
    </nav>
  );
}

export default Navigation;
