import { Routes, Route, Navigate } from "react-router-dom";


import React from "react";

import "./App.scss";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route />
        <Route path="/" element={<Home/>} />      
      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
