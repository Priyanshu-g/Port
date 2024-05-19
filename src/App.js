import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Web from "./pages/Web";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Web" element={<Web />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </main>
    </Router>
  );
};

export default App;
