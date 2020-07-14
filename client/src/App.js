import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Slider from "./components/Carousel"
import SignInModal from "./components/Modal"
import SidePiece from "./components/SideNav"
// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <SignInModal/>
        <Home />
        <Slider/>
        <SidePiece/>
      </Route>
      <Route exact path="/about"></Route>
      <Route exact path="/contact"></Route>
    </Router>
  );
}

export default App;