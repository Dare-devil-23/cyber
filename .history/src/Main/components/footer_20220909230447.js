import React from "react";
import { Component } from "react";
import { keyframes } from "@emotion/react";
import "../../App.css";
import "./footer.css";

import "./footerlogo.scss";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "@reach/router";

class Footer extends Component {
  render() {
    let circleClasses = "rounded-full ";
    let iconStyles = { color: "white", fontSize: "1.5em", margin: "10px" };
    const fadeInLeft = keyframes`
      100%{
        visibility="visible" ,
      }`;
    return (
      <footer className="new_footer_area bg_color">
        {/* <div className="line"><hr /></div> */}
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.2s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p className="getintouch">
                    Don't miss any new updates on Cyber Security and
                    technologies.! Follow us on social media.
                  </p>
                </div>
                <div>
                    <span >
                      <a href="https://www.facebook.com/CYBERINFOTEAM">
                        <FaFacebook style={iconStyles} />
                      </a>
                    </span>
                    <span >
                      <a href="https://instagram.com/cyberinfoinc?igshid=YmMyMTA2M2Y">
                        <FaInstagram style={iconStyles} />
                      </a>
                    </span>
                    <span >
                      <a href="https://www.linkedin.com/company/cyber-info/">
                        <FaLinkedin style={iconStyles} />
                      </a>
                    </span>
                  </div>
              </div>
              
              <div
                className="col-lg-3 col-md-6"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.4s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Technologies
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link to={`/product/ai_&%20iot`}>AI & IOT</Link>
                    </li>
                    <li>
                      <Link to={`/product/cyber_security`}>Cyber Security</Link>
                    </li>
                    <li>
                      <Link to={`/product/qantum_computing`}>
                        Qantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to={`/product/devops_&%20automation`}>Devops</Link>
                    </li>
                    <li>
                      <Link to={`/product/testing_services`}>IT Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                style={{ marginBottom: "20px" }}
              >
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.6s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18 ">
                    <Link to="careers">Careers</Link>
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="credits">
                <p>2022 CyberInfo. All Rights Reserved.</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="wavefoot">
          <svg viewBox="0 0 120 28" className="svgWave">
            <defs>
              <mask id="xxx">
                <circle cx="7" cy="12" r="40" fill="#fff" />
              </mask>

              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
              <path
                id="wave"
                d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
              />
            </defs>

            <use
              id="wave3"
              className="wave"
              xlinkHref="#wave"
              x="0"
              y="-2"
            ></use>
            <use
              id="wave2"
              className="wave"
              xlinkHref="#wave"
              x="0"
              y="0"
            ></use>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,255,0)", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255,0,0)", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>

            <g className="gooeff">
              <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
            </g>
            <g className="toplogo">
              <text x="70" y="8" fill="url(#grad1)">
                CyberInfo
              </text>
            </g>
          </svg>
        </div>
      </footer>
    );
  }
}

export default Footer;
