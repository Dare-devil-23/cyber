import React from "react";
// import { Link } from '@reach/router';
import { Component } from "react";
import { keyframes } from "@emotion/react";
import "../../App.css";
import "./footer.css"

import "./footerlogo.scss";

// const footer = () => (
//     <footer className="footer-light">
//         <div className="container">
//             {/* <div className="d-flex justify-content-center"> */}

//                 <div className="widget">

//                     <ul>
//                         <li><Link to="">Privacy Policy</Link></li>
//                         <li><Link to="">Terms and conditions</Link></li>
//                     </ul>
//                 </div>
//             {/* </div> */}
//         </div>
//     </footer>
// );
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaPinterest,
} from "react-icons/fa";
// import Reveal from "react-awesome-reveal";
// import Rev from "../../Main/Rev";
import { useRandomReveal } from "react-random-reveal";
// import FooterParticles from "./FooterParticles";

class Footer extends Component {
  render() {
    let circleClasses = "rounded-full ";
    let none = { display: "none" };
    let iconStyles = { color: "white", fontSize: "1.5em", margin: "10px" };
    const Cyber = () => {
      const characters = useRandomReveal({
        isPlaying: true,
        duration: 1.5,
        revealDuration: 0.6,
        characters: "Cyber",
        updateInterval: 0.05,
      });

      return characters;
    };
    const Info = () => {
      const characters = useRandomReveal({
        isPlaying: true,
        duration: 1.5,
        revealDuration: 0.6,
        characters: " Info",
        updateInterval: 0.05,
      });

      return characters;
    };
    const fadeInLeft = keyframes`
      100%{
        visibility="visible" ,
      }`;
    // let fadeInLeft={{visibility: "visible", animation-delay: "0.6s", animation-name: "fadeInleft"}};
    return (
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.2s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>
                    Don't miss any new updates on Cyber Security and
                    technologies.!
                  </p>
                  <form
                    action="/"
                    className="f_subscribe_two mailchimp"
                    _lpchecked="1"
                  >
                    {/* <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"> */}
                    <p className="mchimp-errmessage" style={none}></p>
                    <p className="mchimp-sucmessage" style={none}></p>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.4s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">Company</a>
                    </li>
                    <li>
                      <a href="/">Android App</a>
                    </li>
                    <li>
                      <a href="/">ios App</a>
                    </li>
                    <li>
                      <a href="/">Desktop</a>
                    </li>
                    <li>
                      <a href="/">Projects</a>
                    </li>
                    <li>
                      <a href="/">My tasks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.6s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="/">Reporting</a>
                    </li>
                    <li>
                      <a href="/">Documentation</a>
                    </li>
                    <li>
                      <a href="/">Support Policy</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  keyframes={fadeInLeft}
                  animation-delay={"0.8s"}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <span className={circleClasses}>
                      <FaFacebook style={iconStyles} />
                    </span>
                    <span className={circleClasses}>
                      <FaTwitterSquare style={iconStyles} />
                    </span>
                    <span className={circleClasses}>
                      <FaInstagram style={iconStyles} />
                    </span>
                    <span className={circleClasses}>
                      <FaPinterest style={iconStyles} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer_bg">
              <div className="footer_bg_one"></div> 
              <div className="footer_bg_two"></div>
              <div className="footer_bg_three"></div>
              <div className="footer_bg_four"></div>
              <div className="footer_bg_five"></div>
              <div className="footer_bg_six"></div>
              <div className="footer_bg_seven"></div>
            </div> */}
        </div>
        {/* <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400">© cyberInfo 2022 All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                  <p>Made with <i className="icon_heart"></i> in <a href="http://cayberInfo.com" rel="noreferrer" target="_blank">CyberInfo</a></p>
                </div>
              </div>
            </div>
          </div> */}

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
                <stop offset="0%" style={{stopColor:"rgb(255,255,0)",stopOpacity:'1'}} />
                <stop offset="100%" style={{stopColor:"rgb(255,0,0)",stopOpacity:'1'}} />
              </linearGradient>
            </defs>
            <g className="toplogo">
              <text
                x="70"
                y="8"
                fill="url(#grad1)"
              >CyberInfo</text>
            </g>
            <g className="gooeff">
              <circle className="drop drop1" cx="20" cy="2" r="1.8" />
              <circle className="drop drop2" cx="25" cy="2.5" r="1.5" />
              <circle className="drop drop3" cx="16" cy="2.8" r="1.2" />
              <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
            </g>
          </svg>
        </div>
      </footer>
    );
  }
}

export default Footer;
