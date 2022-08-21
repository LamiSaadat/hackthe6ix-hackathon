import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

import Language from "./pages/Language/Language";
import Info from "./pages/Info/Info";

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
        <Route exact path="/language" element={<Language />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
