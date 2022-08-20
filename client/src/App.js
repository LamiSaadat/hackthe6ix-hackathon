import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

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
      </Routes>
    </Router>
  );
};

export default App;
