import React from "react";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import Footer from "./components/footer";

const Training = () => {
  return (
    <>
      <HeaderSmall />
      <HeaderMain />
      <div>
        <div
          className="container"
        >
          This is Training
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Training;
