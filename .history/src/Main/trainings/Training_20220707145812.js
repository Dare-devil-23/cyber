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
  const trains = {
    one: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    two: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
    three:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
  }
  return (
    <>
      <HeaderSmall />
      <HeaderMain />
      <div
        className="container"
        style={{ minHeight: "60vh", marginTop: "15px" }}
      >
        <div id="tabs1">
          <Tabs fill defaultActiveKey="Training Delivery">
            <Tab
              eventKey="Training Delivery"
              title={
                <span>
                  <GiTeacher className="icon" />
                  <br />
                  Training Delivery
                </span>
              }
              className="tabText"
            >
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
            <Tab
              eventKey="Instructional Designers"
              title={
                <span>
                  <TbBulb className="icon" />
                  <br />
                  Instructional Designers
                </span>
              }
            >
              <Reveal
                className="onStep"
                keyframes={fadeLeft}
                duration={600}
                triggerOnce
              >
                <div></div>
              </Reveal>
            </Tab>
            <Tab
              eventKey="Custom Learning Solutions"
              title={
                <span>
                  <SiFuturelearn className="icon" />
                  <br />
                  Custom Learning Solutions
                </span>
              }
            >
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
            <Tab
              eventKey="Managed Learning Services"
              title={
                <span>
                  <HiOutlineClipboardCheck className="icon" />
                  <br />
                  Managed Learning Services
                </span>
              }
            >
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
            <Tab
              eventKey="Learning Strategy"
              title={
                <span>
                  <GiBeveledStar className="icon" />
                  <br />
                  Learning Strategy
                </span>
              }
            >
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
      <div className="container">
        <div className="images">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            dynamicHeight={true}
            transitionTime={500}
            width={"100%"}
            className="curosole"
          >
            {Object.keys(trains).map((img, index) => (
              <img
                width="400px"
                height="350px"
                src={product.images[img]}
                alt={`${img}`}
                key={index}
                style={{ borderRadius: "10px" }}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Training;
