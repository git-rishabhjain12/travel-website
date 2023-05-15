import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import "./css.css"
function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default Main;
