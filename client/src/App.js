import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";

import Card from "./components/Card/Card";
import Survey from "./components/Survey/Survey";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="card" element={<Card />} />
        <Route exact path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default App;
