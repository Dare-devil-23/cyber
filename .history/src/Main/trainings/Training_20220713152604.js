import React , {useState} from "react";
import HeaderMain from "../menu/HeaderMain";
import HeaderSmall from "../menu/HeaderSmall";
import Footer from "../components/footer";
import "./training.css";
import { GiTeacher, GiBeveledStar } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";
import { SiFuturelearn } from "react-icons/si";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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

const Form = () => {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>Success</p>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Sign In</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button
          onClick={handleSubmit}
          className="btn-main lead m-auto my-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Training = () => {
  const trains = {
    one: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    two: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
    three:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80",
  };
  return (
    <>
      <HeaderSmall />
      <HeaderMain />
      <div
        className="container"
        style={{ minHeight: "60vh", marginTop: "15px" }}
      >
        <div id="tabs1" style={{ display: 'block', width: 700, padding: 30 }}>
          <Tabs fill defaultActiveKey="Training Delivery">
            <Tab
              eventKey="Training Delivery"
              title={
                <span style={{width:'60%' , margin:'auto'}}>
                  <GiTeacher className="icon" />
                  <br />
                  <p >Training Delivery</p>
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
                <span style={{width:'60%' , margin:'auto'}}>
                  <TbBulb className="icon" />
                  <br />
                  <p >Instructional Designers</p>
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
                <span style={{width:'60%' , margin:'auto'}}>
                  <SiFuturelearn className="icon" />
                  <br />
                  <p >Custom Learning Solutions</p>
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
                <span style={{width:'60%' , margin:'auto'}}>
                  <HiOutlineClipboardCheck className="icon" />
                  <br />
                  <p >Managed Learning Services</p>
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
                <span style={{width:'60%' , margin:'auto'}}>
                  <GiBeveledStar className="icon" />
                  <br />
                  <p >Learning Strategy</p>
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
      <div className="container maindiv">
        <div className="images ">
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
            
              <img
                width="300px"
                height="300px"
                src={trains.one}
               
                style={{ borderRadius: "10px" }}
              />
              <img
                width="300px"
                height="300px"
                src={trains.two}
              
                style={{ borderRadius: "10px" }}
              />
              <img
                width="300px"
                height="300px"
                src={trains.three}
               
                style={{ borderRadius: "10px" }}
              />
            
          </Carousel>
        </div>
        <div className="signin">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Training;
