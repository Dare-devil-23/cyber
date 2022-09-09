import React, { useState } from "react";
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
import { Parallax } from "react-parallax";
import background from "../../assets/ph8.jpg";
import ProgressBar from "react-progressbar-on-scroll";
import { keyframes } from "@emotion/react";
import ButtonLoader from "./ButtonLoader";
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
        <p>Successfull</p>
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
        {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        <div
          onClick={handleSubmit}
          className="btn-main m-auto my-5 button"
          type="submit"
        >
          <ButtonLoader />
        </div>
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
      <ProgressBar color="#FFA600" gradient={true} gradientColor="#FF1E00" />
      <HeaderSmall />
      <HeaderMain />
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
        strength={1000}
        bgImageStyle={{height:"100vh",width:"100%"}}
      >
        <div className="container">
          <div>
            <div className="tabs">
              <div className="tab">
                <GiTeacher className="icon" />
                <p>Training Delivery</p>
              </div>
              <div className="tab">
                <TbBulb className="icon" />
                <p>Instructional Designers</p>
              </div>
              <div className="tab">
                <SiFuturelearn className="icon" />
                <p>Custom Learning Solutions</p>
              </div>
              <div className="tab">
                <HiOutlineClipboardCheck className="icon" />
                <p>Managed Learning Services</p>
              </div>
              <div className="tab">
                <GiBeveledStar className="icon" />
                <p>Learning Strategy</p>
              </div>
            </div>
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
      </Parallax>
    </>
  );
};

export default Training;
