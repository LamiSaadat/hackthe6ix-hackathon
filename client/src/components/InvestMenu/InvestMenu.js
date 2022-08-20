import { Link } from "react-router-dom";
import "./InvestMenu.scss";

function InvestMenu({ investMenuOpen, setInvestMenuOpen }) {
  const toggleMenu = () => {
    setInvestMenuOpen(!investMenuOpen);
  };
  return (
    <ul
      className={"invest-menu " + (investMenuOpen && "active")}
      onMouseLeave={() => setInvestMenuOpen(!investMenuOpen)}
    >
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/invest/stocks-and-etfs">
          Stocks & ETFs
        </Link>
      </li>
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/invest/crypto">
          Crypto
        </Link>
      </li>
      <li onClick={() => toggleMenu()}>
        <Link to="https://www.wealthsimple.com/en-ca/invest/managed-investing">
          Managed Investing
        </Link>
      </li>
    </ul>
  );
}

export default InvestMenu;
