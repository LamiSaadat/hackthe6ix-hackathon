import "./Navigation.scss";
import logo from "../../assets/images/wealthsimple-logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="https://www.wealthsimple.com/">
        <img src={logo} className="nav__logo"></img>
      </Link>
    </nav>
  );
}

export default Navigation;
