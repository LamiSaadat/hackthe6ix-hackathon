import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import downArrow from "../../assets/icons/down-arrow.png";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //   useEffect(() => {
  //     Aos.init({ duration: 600 });
  //   }, []);

  return (
    <nav className={"mobile-menu " + (menuOpen && "active")}>
      <ul className="mobile-menu__links">
        <li className="mobile-menu__list-item">
          Invest
          <img
            src={downArrow}
            alt="Down arrow"
            className="mobile-menu__icon"
          ></img>
        </li>
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          Spend & save
        </li>
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          Tax
        </li>
        <li className="mobile-menu__list-item">
          Learn
          <img
            src={downArrow}
            alt="Down arrow"
            className="mobile-menu__icon"
          ></img>
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
