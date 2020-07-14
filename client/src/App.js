import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Slider from "./components/Carousel"
import SignInModal from "./components/Modal"
// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header/>
        <SignInModal/>
        <Home />
        <Slider/>
      </Route>
      <Route exact path="/about"></Route>
      <Route exact path="/contact"></Route>
    </Router>
  );
}

export default App;