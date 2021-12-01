import "./App.css";
import React from "react";
import Nav from "./components/Navbar/Nav.js";
import Home from "./components/Home/home";
import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Technology from "./components/Technology/Technology";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Tech" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
