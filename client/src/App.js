import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";

import Card from "./components/Card/Card";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="card" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
