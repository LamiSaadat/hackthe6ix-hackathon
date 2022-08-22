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
        <a
          href="https://www.wealthsimple.com/en-ca/invest/stocks-and-etfs"
          target="_blank"
          rel="noreferrer"
        >
          Stocks & ETFs
        </a>
      </li>
      <li onClick={() => toggleMenu()}>
        <a
          href="https://www.wealthsimple.com/en-ca/invest/crypto"
          target="_blank"
          rel="noreferrer"
        >
          Crypto
        </a>
      </li>
      <li onClick={() => toggleMenu()}>
        <a
          href="https://www.wealthsimple.com/en-ca/invest/managed-investing"
          target="_blank"
          rel="noreferrer"
        >
          Managed Investing
        </a>
      </li>
    </ul>
  );
}

export default InvestMenu;
