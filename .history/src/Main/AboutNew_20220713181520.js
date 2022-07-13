import React from "react";
import "./aboutNew.css";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

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
const fadeRight = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateX(40px);
  transform: translateX(-40px);
}
50% {
  opacity: 0;
  -webkit-transform: translateX(80px);
  transform: translateX(-80px);
}
100% {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}`;
const AboutNew = () => {
  return (
    <div className="ping-pong container">
      
      <div className="sec">
        <Parallax speed={-10}>
          <div className="content">
          
            <h1>1.Quality</h1>
            <Reveal
              // className="onStep"
              keyframes={fadeRight}
              // delay={300}
              duration={800}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it
              </p>
            </Reveal>
          </div>
        </Parallax>

        <div className="img">
          <Reveal
            className="onStep"
            keyframes={fadeLeft}
            // delay={300}
            duration={800}
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="one"
            />
          </Reveal>
        </div>
      </div>
      <div className="sec">
        <div className="spimg-1">
          <Reveal
            className="onStep"
            keyframes={fadeRight}
            // delay={300}
            duration={800}
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="two"
            />
          </Reveal>
        </div>
        <Parallax speed={10}>
          <div className="content">
            <h1 className="">2.Maintenance</h1>
            <Reveal
              className="onStep"
              keyframes={fadeLeft}
              // delay={300}
              duration={800}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it
              </p>
            </Reveal>
          </div>
        </Parallax>

        <div className="spimg-2">
          <Reveal
            className="onStep"
            keyframes={fadeRight}
            // delay={300}
            duration={800}
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="two"
            />
          </Reveal>
        </div>
      </div>
      <div className="sec">
        <Parallax speed={-10}>
          <div className="content">
            <h1 className="">3.Scalability</h1>
            <Reveal
              className="onStep"
              keyframes={fadeRight}
              // delay={300}
              duration={800}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled itgalley of type and scrambled it
              </p>
            </Reveal>
          </div>
        </Parallax>
        <div className="img">
          <Reveal
            className="onStep"
            keyframes={fadeLeft}
            // delay={300}
            duration={800}
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="three"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
