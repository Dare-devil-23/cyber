import React from "react";
import { createGlobalStyle } from "styled-components";
import { Component } from "react";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import Footer from "./components/footer";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;


const Training = ()=>{
    return (
      <>
        <HeaderSmall />
        <HeaderMain />
        <div>
          <GlobalStyles />

          <div
            className="container"
            style={{ minHeight: "60vh", marginTop: "155px" }}
          >
            This is Training
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Training;
