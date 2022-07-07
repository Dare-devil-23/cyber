import React from "react";
import HeaderMain from "../menu/HeaderMain";
import HeaderSmall from "../menu/HeaderSmall";
import Footer from "../components/footer";

const Training = () => {
  return (
    <>
      <HeaderSmall />
      <HeaderMain />

      <div className="container">
        <ul>
          <li>
              Training Delivery
          </li>
          <li>
              Instructional Designers
          </li>
          <li>
              Custom Learning Solutions
          </li>
          <li>
              Managed Learning Services
          </li>
          <li>
              Learning Strategy
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Training;
