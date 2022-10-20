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
                    className="container datapart"
                  >
                    {
                      product.lable === "BlockChain Technology" ? 
                      <div >
                      <Card bg="dark" className="p-4 mt-5">
                        <h2>{product.lable}</h2>
                        <ul>
                          {product.info.points.map((d , i)=>{
                            return(
                              <Card.Text><li >{d}</li></Card.Text>
                            )
                          })}
                        </ul>
                        <Card.Title className="pt-3">Upcoming Projects:</Card.Title>
                        
                          {product.info.upcomingProjects.map((d,i)=>{
                              return(
                                <div className="p-3" key={i}>
                                  <Card.Title style={{fontWeight:"700"}}>{d.title}:</Card.Title>
                                  <Card.Text className="px-3">{d.data}</Card.Text>
                                </div>
                              )
                          })}
                       
                        <Card.Title className="py-3">Workshops and R&D:</Card.Title>
                        <Card.Text className="px-3">{product.info.workshop}</Card.Text>
                        <Card.Title className="py-3">What are the benefits of blockchain && How can it be used?</Card.Title>
                        <ul>{
                          product.info.benifits.map((d,i)=>{
                            return(
                              <Card.Text className="px-3" key={i}><li>{d}</li></Card.Text>
                            )
                          })
                        }</ul>
                      </Card>

                      </div>:
                      product.lable === "Cyber Security"?
                      <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          {product.info.points.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="p-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                        </Card>
                      </div>:
                      product.lable === "Digital Services" ? 
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          <Card.Text className="p-3">{product.info.point}</Card.Text>
                          <Card.Title>Addressing Your Challenges:</Card.Title>
                          <Card.Text className="p-3">{product.info.challenge}</Card.Text>
                          <Card.Title>Applied Innovation Exchange Network:</Card.Title>
                          <Card.Text className="p-3">{product.info.innovation}</Card.Text>
                          <Card.Title>Digital Stategy And Transformation</Card.Title>
                          {product.info.stategy.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <Card.Title>Digital Manufacturing</Card.Title>
                          {product.info.manufacturing.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <ul>
                          {product.info.areas.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                               <li>{d}</li> 
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Title>Business Services</Card.Title>
                          {product.info.business.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <Card.Title>Data Intelligence</Card.Title>
                          {product.info.datainte.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <Card.Title>Business Value and social Impact:</Card.Title>
                          <Card.Text className="p-3">{product.info.social}</Card.Text>
                          <Card.Title>Innovation and Experimentation:</Card.Title>
                          <Card.Text className="p-3">{product.info.experiment}</Card.Text>
                          <Card.Title>Industry Expertise:</Card.Title>
                          <Card.Text className="p-3">{product.info.industry}</Card.Text>
                          <Card.Title>Organization:</Card.Title>
                          <Card.Text className="p-3">{product.info.organisation}</Card.Text>
                        </Card>
                      </div>:
                      product.lable === "Qantum Computing"?
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          <ul>
                            {product.info.points.map((d,i)=>{
                              return(
                                <li key={i}>
                                  <Card.Text className="px-3 pt-3">
                                    {d}
                                  </Card.Text>
                                </li>
                              )
                            })}
                          </ul>
                          <Card.Title>Start Building Quantum Applications</Card.Title>
                          <Card.Text className="p-3">{product.info.building}</Card.Text>
                          <Card.Title>The Easiest On-Ramp to Quantum Development</Card.Title>
                          {product.info.onRamp.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <Card.Title>Cloud based IDE</Card.Title>
                          <Card.Text className="p-3">{product.info.ide}</Card.Text>
                          <Card.Title>Real Time Access</Card.Title>
                          <Card.Text className="p-3">{product.info.RTA}</Card.Text>
                        </Card>
                      </div>:
                      product.lable === "Medical IT" ? 
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          <Card.Text className="p-3">{product.info.data}</Card.Text>
                        </Card>
                      </div>:
                      product.lable === "DevOps & Automation"?
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          
                          <Card.Text className="p-3">{product.info.data}</Card.Text>
                          <Card.Title>Improve collaboration:</Card.Title>
                          <Card.Text className="p-3">{product.info.improve}</Card.Text>
                          <Card.Title>Enforce Consistency:</Card.Title>
                          <Card.Text className="p-3">{product.info.enforce}</Card.Text>
                          <Card.Title>Devops implementation and consulting to drive result:</Card.Title>
                          {product.info.results.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          
                          <Card.Title>Automation:</Card.Title>
                          <Card.Text className="p-3">{product.info.automation}</Card.Text>
                          <Card.Title>Industrial Robotics:</Card.Title>
                          <Card.Text className="p-3">{product.info.industry}</Card.Text>
                          
                          <Card.Title>Manufacturing application of robotics:</Card.Title>
                          <Card.Text className="p-3">{product.info.manufacturing.p1}</Card.Text>
                          <ul>{product.info.manufacturing.l1.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3">
                               <li> {d}</li>
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Text className="p-3">{product.info.manufacturing.p2}</Card.Text>
                          <ul>{product.info.manufacturing.l2.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3">
                               <li> {d}</li>
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Text className="p-3">{product.info.manufacturing.p3}</Card.Text>
                        </Card>
                      </div>:
                      product.lable === "AI & IOT" ? 
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          {product.info.points.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}

                          <Card.Title className="pt-3">Leverage Data & AI’s transformative power with Perform AI</Card.Title>
                          {product.info.leverage.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          <Card.Title className="pt-3">Data & AI for trusted business outcomes</Card.Title>
                          {product.info.outcome.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                          
                          <Card.Title className="pt-3">The right team to scale Data & AI</Card.Title>
                          {product.info.scale.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                        </Card>
                      </div>:
                      product.lable === "Cloud Services"?
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          <Card.Text className="p-3">{product.info.data}</Card.Text>
                          <Card.Title className="py-3">{product.info.support}</Card.Title>
                          <ul>{product.info.points.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3">
                               <li> {d}</li>
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Title className="py-3">Cloud Strategy:</Card.Title>
                          <Card.Text className="px-3">{product.info.stategy}</Card.Text>
                          
                          <Card.Title className="py-3">Be a Cloud-first Organization</Card.Title>
                          <Card.Text className="px-3">{product.info.org.p1}</Card.Text>
                          <Card.Text className="px-3">{product.info.org.p2}</Card.Text>
                          <ul>{product.info.org.l1.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3">
                               <li> {d}</li>
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Title className="py-3">Plan Your Journey to the Cloud</Card.Title>
                          <Card.Text className="px-3">{product.info.journey.p1}</Card.Text>
                          
                          <ul>{product.info.journey.l1.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3">
                               <li> {d}</li>
                              </Card.Text>
                            )
                          })}</ul>
                          <Card.Text className="px-3">{product.info.journey.p2}</Card.Text>
                          <Card.Title className="py-3">Cloud Integration</Card.Title>
                          <Card.Text className="px-3">{product.info.integration}</Card.Text>
                        </Card>
                      </div>:
                      product.lable === "Staffing or Recruitment" ? 
                       <div>
                        <Card bg="dark" className="p-4 mt-5">
                          <h2>{product.lable}</h2>
                          {product.info.points.map((d,i)=>{
                            return(
                              <Card.Text key={i} className="px-3 pt-3">
                                {d}
                              </Card.Text>
                            )
                          })}
                        </Card>
                      </div>:
                      <></>
                    }
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
