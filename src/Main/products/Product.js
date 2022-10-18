import React, { useState } from "react";
import Footer from "../components/footer";
import { Tabs, Tab, Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
// import HeaderSmall from "../menu/HeaderSmall";
import HeaderMain from "../menu/HeaderMain";
import BreadCrumbNav from "../BreadCrumbNav";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "./product.css";
import { data } from "./productData";
import { Parallax } from "react-parallax";

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

const Product = (props) => {
  return (
    <>
      {/* <HeaderSmall /> */}
      <HeaderMain />


      {data.map((product, i) => {
        {
          if (product.lable.toLowerCase().replace(" ", "_") === props.id) {
            return (
              <div key={i} className="whole">
                <Parallax
                  bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
                  strength={500}
                  bgImageStyle={{ height: "90%", width: "100%" }}
                >
                  <section className="image-section">
                    <div className="container my-4">
                      <BreadCrumbNav data={["Products"]} />
                    </div>
                    <div className="container">
                      <h1>{product.lable}</h1>
                    </div>
                    <div className="images">
                      <Carousel
                        className="curosole"

                        controls={false}
                      >
                        {Object.keys(product.images).map((img, index) => {

                          return (
                            <Carousel.Item key={index}>
                              <img
                                width="400px"
                                height="400px"
                                src={process.env.PUBLIC_URL + product.images[img]}
                                alt={`${img}`}
                                key={index}
                                style={{ borderRadius: "10px" }}
                              />
                            </Carousel.Item>
                          )
                        })}
                      </Carousel>
                    </div>
                  </section>

                  {/* <div
                  className="container"
                  style={{ minHeight: "60vh", marginTop: "15px" }}
                >
                  <div id="tabs1">
                    <Tabs fill defaultActiveKey="home">
                      <Tab eventKey="home" title="Home">
                        <Reveal
                          className="onStep"
                          keyframes={fadeLeft}
                          duration={600}
                          triggerOnce
                        >
                          <div>{product.home}</div>
                        </Reveal>
                      </Tab>
                      <Tab eventKey="profile" title="Profile">
                        <Reveal
                          className="onStep"
                          keyframes={fadeLeft}
                          duration={600}
                          triggerOnce
                        >
                          <div>{product.profile}</div>
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
                          <div>{product.contact}</div>
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
                          <div>{product.whyThis}</div>
                        </Reveal>
                      </Tab>
                    </Tabs>
                  </div>
                </div> */}

                  <div
                    className="container"
                    style={{ minHeight: "60vh", marginTop: "15px" }}
                  >
                    <Card bg="dark">
                      <div className="p-3">
                        <ul>
                          <li>
                            Blockchain is an upcoming futuristic technology, which also has a wide adoption and usages across different sectors.
                          </li>
                          <li>
                            What we are doing in the BlockChain Technology: Our team has worked with a vast range of blockchain technologies, including Ethereum, Hyperledger, and BitGo. We're always striving to be at the cutting edge of the latest blockchain innovation, and we proactively recommend the best solutions to our clients.

                          </li>
                          <li>
                            we hire individuals who want to work with leading blockchain technology partners and also our internal Applications.

                          </li>
                          <li>
                            We are here to set up a Blockchain application/technology for your organization and create secure decentralized databases to help store data, manage, handle transactions, or any other business needs that Blockchain can solve.

                          </li>
                        </ul>

                      </div>
                    </Card>
                  </div>
                  <Footer />
                </Parallax>
              </div>
            );
          }
        }
      })}
    </>
  );
};

export default Product;
