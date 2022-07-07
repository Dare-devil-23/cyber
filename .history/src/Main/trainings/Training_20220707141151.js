import React from "react";
import HeaderMain from "../menu/HeaderMain";
import HeaderSmall from "../menu/HeaderSmall";
import Footer from "../components/footer";
import "./training.css";
import { GiTeacher, GiBeveledStar } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";
import { SiFuturelearn } from "react-icons/si";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import { Tabs, Tab } from "react-bootstrap";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;
const Training = () => {
  return (
    <>
      <HeaderSmall />
      <HeaderMain />

      {/* <div className="container">
        <div className="tabs">
          <ul>
            <li className="tab">
              <GiTeacher className="icon" />
              <p>Training Delivery</p>
            </li>
            <li className="tab">
              <TbBulb className="icon" />
              <p>Instructional Designers</p>
            </li>
            <li className="tab">
            <SiFuturelearn className="icon" />
              <p>Custom Learning Solutions</p>
            </li>
            <li className="tab">
              <HiOutlineClipboardCheck className="icon" />
              <p>Managed Learning Services</p>
            </li>
            <li className="tab">
              <GiBeveledStar className="icon" />
              <p>Learning Strategy</p>
            </li>
          </ul>
        </div>
      </div> */}
      <div
        className="container"
        style={{ minHeight: "60vh", marginTop: "15px" }}
      >
        <div id="tabs7" >
          <Tabs fill defaultActiveKey="home">
            <Tab eventKey="home" title="Home" className="tabText">
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                delay={300}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
            <Tab eventKey="whyus " title="why this">
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                delay={300}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Training;
