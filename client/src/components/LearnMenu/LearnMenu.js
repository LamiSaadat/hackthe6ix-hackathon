import { Link } from "react-router-dom";
import "./LearnMenu.scss";

function LearnMenu({ learnMenuOpen, setLearnMenuOpen }) {
  const toggleMenu = () => {
    setLearnMenuOpen(!learnMenuOpen);
  };
  return (
    <ul
      className={"learn-menu " + (learnMenuOpen && "active")}
      onMouseLeave={() => setLearnMenuOpen(!learnMenuOpen)}
    >
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/magazine">Magazine</Link>
      </li>
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/learn">
          Personal finance 101
        </Link>
      </li>
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/tool/tax-calculator">
          Income tax calculator
        </Link>
      </li>
    </ul>
  );
}

export default LearnMenu;
