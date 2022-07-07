import React from "react";
import { createGlobalStyle } from "styled-components";
import { Component } from "react";
// import { keyframes } from "styled-components";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import Footer from "./components/footer";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

// const fadeInUp = keyframes`
//   0% {
//     opacity: 0;
//     -webkit-transform: translateY(40px);
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     -webkit-transform: translateY(0);
//     transform: translateY(0);
//   }
// `;

class Training extends Component {
  state = {};
  render() {
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
}

export default Training;
