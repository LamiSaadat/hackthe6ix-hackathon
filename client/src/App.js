import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Card from "./components/Card/Card";
import Investing from "./components/Investing/Investing";
import AccountTypes from "./components/AccountTypes/AccountTypes";
import InvestmentTypes from "./components/InvestmentTypes/InvestmentTypes";
import Taxes from "./components/Taxes/Taxes";

const App = () => {
  const [investMenuOpen, setInvestMenuOpen] = useState(false);
  const [learnMenuOpen, setLearnMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Navigation
        investMenuOpen={investMenuOpen}
        setInvestMenuOpen={setInvestMenuOpen}
        learnMenuOpen={learnMenuOpen}
        setLearnMenuOpen={setLearnMenuOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="card" element={<Card />} />
        <Route exact path="investing101" element={<Investing />} />
        <Route exact path="account-types" element={<AccountTypes />} />
        <Route exact path="investment-types" element={<InvestmentTypes />} />
        <Route exact path="taxes" element={<Taxes />} />
      </Routes>
    </Router>
  );
};

export default App;
