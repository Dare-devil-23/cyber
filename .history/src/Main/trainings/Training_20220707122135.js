import React from "react";
import HeaderMain from "../menu/HeaderMain";
import HeaderSmall from "../menu/HeaderSmall";
import Footer from "../components/footer";
import "./training.css";
import {GiTeacher } from "react-icons/gi";
const Training = () => {
  return (
    <>
      <HeaderSmall />
      <HeaderMain />

      <div className="container">
        <div className="tabs">
        <ul>
          <li>
            <GiTeacher />
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
      </div>

      <Footer />
    </>
  );
};

export default Training;
