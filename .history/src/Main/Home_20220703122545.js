import React from "react";
import SliderCarouselsingle from "../components/components/SliderCarouselsingle";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";
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
import "./gradients.css";
import { motion } from "framer-motion";

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

const GlobalStyles = createGlobalStyle`
  
  header#myHeader.navbar.sticky.white {
    background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  .jumbotron.no-bg{
    background: center bottom;
    background-size: cover;
    height: 100vh;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 4500);
  });
  const items = [
    "Digital Services",
    "Cyber Security",
    "BlockChain Technology",
    "Qantum Computing",
    "Medical IT",
    "DevOps & Automation",
    "AI & IOT",
    "Testing Services",
    "Staffing / Recruitment",
  ]
  items.map((item)=>{
    setTimeout(()=>{
      console.log(item)
    },3000)
    
  })
  return (
    <div >
      {!loading && (
        <div className="sections">
          <HeaderSmall />
          <HeaderMain />
          <GlobalStyles />
          <motion.section
            className="jumbotron scrollanim"
                        
          >
            <div className="container my-0 pt-0" >
              <div className="row align-items-center">
                <div className="col-lg-7" >
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
                      blockchain, that certifies a digital asset to be unique
                      and therefore not interchangeable
                    </p>
                  </Reveal>
                  <div className="spacer-10"></div>

                  <span
                    onClick={() => window.open("/#", "_self")}
                    className="btn-main lead"
                  >
                    Explore
                  </span>

                  <div className="spacer-double"></div>
                </div>
                <div className="col-lg-5 px-0 my-5">
                  <SliderCarouselsingle />
                </div>
              </div>
            </div>
          </motion.section>

          <section className="cards scrollanim">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="our">Our Services</h1>
                </div>
              </div>
              <Cards />
            </div>
          </section>

          <section className="scrollanim">
            <AboutNew />
          </section>

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
