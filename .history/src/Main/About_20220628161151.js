import React from "react";
import { createGlobalStyle } from "styled-components";
import Slide from "react-awesome-reveal";
import { keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const About = () => (
  <>
    <GlobalStyles />

    <section className="jumbotron no-bg hero">
      <div className="container hero">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="spacer-single"></div>
            <div className="spacer-10"></div>
            <Slide
              
            >
              <h1>1.Quality</h1>
            </Slide>
            <Slide
              
            >
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it"
              </p>
            </Slide>
            <div className="spacer-10"></div>
          </div>
          <div className="col-lg-6 px-0">
            <img
              className="homeimg"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="1"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="jumbotron no-bg hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              className="homeimg"
              src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="1"
              width="500"
              height="400"
            />
          </div>
          <div className="col-lg-6">
            <Slide >
              <h1 className="">2.Maintenance</h1>
            </Slide>
            <Slide>
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it"
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </section>

    <section className="jumbotron no-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Slide
              
            >
              <h1 className="">3.Scalability</h1>
            </Slide>
            <Slide
              
            >
              <p className=" lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it"
              </p>
            </Slide>
          </div>
          <div className="col-lg-6 px-0">
            <img
              className="homeimg"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="1"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
export default About;
