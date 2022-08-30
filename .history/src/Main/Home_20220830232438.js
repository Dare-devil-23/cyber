import React, { useRef } from "react";
import SliderCarouselsingle from "../components/components/SliderCarouselsingle";
import Footer from "./components/footer";
// import { createGlobalStyle } from "styled-components";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import ReactRotatingText from "react-rotating-text";
import Cards from "./Cards";
import HeaderMain from "./menu/HeaderMain";
import Loading from "./Loading.js";
import { useState, useEffect } from "react";
import HeaderSmall from "./menu/HeaderSmall";
import "../App.css";
import AboutNew from "./AboutNew";
import "./scrollbar.css";
// import { motion } from "framer-motion";
import { Link } from "@reach/router";
// import { Parallax } from "@react-spring/parallax";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Parallax } from "react-parallax";
import CustomCarousel from "./CustomCarousel";

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

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
  // window.scrollTo(0, ref.current.offsetTop);
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 4500);
  });
  const items = [
    "Digital Services       ",
    "Cyber Security         ",
    "BlockChain Technology  ",
    "Qantum Computing       ",
    "Medical IT             ",
    "DevOps & Automation    ",
    "AI & IOT               ",
    "Testing Services       ",
    "Staffing or Recruitment",
  ];
  const [count, setCount] = useState(-1);

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div className="homemain">
      {!loading && (
        <div>
          <HeaderSmall />
          <div className="wholeSections">
            <div className="scrollanim herosec">
              <Parallax
                bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
                strength={500}
                
              >
                <HeaderMain
                  onChangeRef={() => {
                    executeScroll();
                  }}
                  home={true}
                />
                <div className="container my-0 pt-0 adjust">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div>
                        <Reveal
                          className="onStep"
                          keyframes={fadeInUp}
                          delay={300}
                          duration={600}
                          triggerOnce
                        >
                          <h1>
                            Is it &nbsp;
                            <ReactRotatingText
                              className="text-success font-weight-bold heroMob"
                              style={{ textAlign: "left" }}
                              items={items}
                              onTypingStart={() => {
                                setCount((count + 1) % items.length);
                              }}
                            />
                            <br />
                            You are looking for ?
                          </h1>
                        </Reveal>
                        <Reveal
                          className="onStep"
                          keyframes={fadeInUp}
                          delay={600}
                          duration={600}
                          triggerOnce
                        >
                          <p className="lead">
                            Unit of data stored on a digital ledger, called a
                            blockchain, that certifies a digital asset to be
                            unique and therefore not interchangeable
                          </p>
                        </Reveal>
                        <div className="spacer-10"></div>
                        <Link
                          to={`/product/${items[count]
                            ?.toLowerCase()
                            .replace(" ", "_")}`}
                        >
                          <span className="btn-main lead">Explore</span>
                        </Link>

                        {/* <div className="spacer-double"></div> */}
                      </div>
                    </div>

                    <div className="col-lg-5 px-0 my-5">
                      {/* <SliderCarouselsingle /> */}
                      <CustomCarousel />
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
            {/* <div className="line"><hr /></div> */}
            <section className="cards">
              <div className="container">
                <Cards />
              </div>
            </section>

            <section className="aboutsec" ref={myRef}>
              <AboutNew />
            </section>
          </div>
          

          <Footer />
        </div>
      )}
      {loading && (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default Home;
