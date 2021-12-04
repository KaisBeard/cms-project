import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AdSec from "./components/AdSec";

import { Outlet } from "react-router";

function App() {

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Outlet />
        <AdSec />
      </div>

      <Footer />
    </div>
  );
}

export default App;
