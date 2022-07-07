import React from "react";
import HeaderMain from "../menu/HeaderMain";
import HeaderSmall from "../menu/HeaderSmall";
import Footer from "../components/footer";
import "./training.css";
import { GiTeacher } from "react-icons/gi";
const Training = () => {
  return (
    <>
      <HeaderSmall />
      <HeaderMain />

      <div className="container">
        <div className="tabs">
          <ul>
            <li className="tab">
              <GiTeacher className="icon" />
              <p>Training Delivery</p>
            </li>
            <li>
              <p>Instructional Designers</p>
            </li>
            <li>
              <p>Custom Learning Solutions</p>
            </li>
            <li>
              <p>Managed Learning Services</p>
            </li>
            <li>
              <p>Learning Strategy</p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Training;
