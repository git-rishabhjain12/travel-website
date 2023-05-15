import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css.css";
import Header from "./Header";
import Section from "./Section";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Section className="homeBanner" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
