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
        <a
          href="https://www.wealthsimple.com/en-ca/magazine"
          target="_blank"
          rel="noreferrer"
        >
          Magazine
        </a>
      </li>
      <li onClick={() => toggleMenu()}>
        <a
          href="https://www.wealthsimple.com/en-ca/learn"
          target="_blank"
          rel="noreferrer"
        >
          Personal finance 101
        </a>
      </li>
      <li onClick={() => toggleMenu()}>
        <a
          href="https://www.wealthsimple.com/en-ca/tool/tax-calculator"
          target="_blank"
          rel="noreferrer"
        >
          Income tax calculator
        </a>
      </li>
    </ul>
  );
}

export default LearnMenu;
