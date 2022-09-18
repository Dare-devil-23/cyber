import React from "react";
import "./aboutNew.css";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const AboutNew = () => {
  return (

    <div className="ping-pong ">
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
        strength={500}
      >
        <div className="sec container">
          <div className="content">
            <h1>Who we are?</h1>

            <p>
              CYBERINFO  Focal point is unlock a client remarkable application which has high potential with ease and perfect adaptability.
              We have accurate intelligence, for all customer business needs to transform into perfect shape. We are ready to deliver the Professional Services for all MSP works.
              We at CYBERINFO are thriving to establish a strong international presence, and building a remarkable record of success that now includes satisfied customers. CYBERINFO,
              leadership continues to celebrate its customer success as our own success.
            </p>
          </div>

          <div className="img">
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="one"
            />
          </div>
        </div>

        <div className="sec container">
          <div className="spimg-1">
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="two"
            />
          </div>
          <div className="content">
            <h1 className="">What we do?</h1>

            <p>
              At CYBERINFO we are currently building a SIEM Application for next generation as a 
              SAAS based platform in the cyber security area. Using block chain technology we are 
              building software applications in Medical IT. We are building Logistics applications 
              with Quantum Computing technology.CYBERINFO caters the customer wants & needs with 
              utmost quality they seek for, in a timely manner at the Greater ROI. This is the great 
              reason for our long term relationships with our clients.
            </p>
          </div>

          <div className="spimg-2">
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="two"
            />
          </div>
        </div>

        <div className="sec container">
          <div className="content">
            <h1 className="">Who we serve?</h1>

            <p>
              CYBERINFO fulfills the customer wants & needs in the Information technology region,
              medical IT Region, Digital Services Region and Staffing and Recruitment Region.
              CYBERINFO has some strong partnerships with direct clients with strongest and most
              innovative manufacturers in cyber security especially.
            </p>
          </div>
          <div className="img">
            <motion.img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="three"
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutNew;
