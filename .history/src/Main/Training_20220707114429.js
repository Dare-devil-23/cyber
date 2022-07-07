import React from "react";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import Footer from "./components/footer";



const Training = ()=>{
    return (
      <>
        <HeaderSmall />
        <HeaderMain />
        <div>
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
