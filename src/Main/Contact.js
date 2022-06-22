import React ,{ Component } from "react";
// import Footer from "../components/components/footer";
// import { Tabs, Tab } from "react-bootstrap";
import HeaderSmall from "./menu/HeaderSmall";
import HeaderMain from "./menu/HeaderMain";
import Footer from "./components/footer";
import { keyframes } from "@emotion/react";

import Reveal from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";

// const fadeLeft = keyframes`
//   0% {
//     opacity: 0;
//     -webkit-transform: translateX(40px);
//     transform: translateX(40px);
//   }
//   50% {
//     opacity: 0;
//     -webkit-transform: translateX(80px);
//     transform: translateX(80px);
//   }
//   100% {
//     opacity: 1;
//     -webkit-transform: translateX(0);
//     transform: translateX(0);
//   }
// `;

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

class Contact extends Component {
  render() {
    const imgStyle = {
      width: "150px",
      height: "150px",
    };
    return (
      <>
        <HeaderSmall />
        <HeaderMain />

        
        <div className="contact">
          <div className="mb-5 pb-5">
            <h1> Reason for inquiry</h1>
            <span>
              <center>Please select the purpose for your inquiry</center>
            </span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="nft_coll_pp">
                  <span onClick={() => window.open("/home", "_self")}>
                    <img
                      style={{ imgStyle }}
                      className="lazy"
                      src="./img/author/author-1.jpg"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span onClick={() => window.open("/home", "_self")}>
                    <h4>Request A Demo</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/#", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Request A Demo
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="nft_coll_pp">
                  <span onClick={() => window.open("/home", "_self")}>
                    <img
                      className="lazy"
                      src="./img/author/author-2.jpg"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span onClick={() => window.open("/home", "_self")}>
                    <h4>Sales Inquiry</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/#", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Sales Inquiry
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="nft_coll_pp">
                  <span onClick={() => window.open("/home", "_self")}>
                    <img
                      className="lazy"
                      src="./img/author/author-3.jpg"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span onClick={() => window.open("/home", "_self")}>
                    <h4>Customer Support</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/#", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Customer Support
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <Reveal
          className="onStep"
          keyframes={fadeLeft}
          // delay={300}
          duration={800}
          
        >
            <div className="contact-info">
              <h3>Corporate Headquarters</h3>
              <p></p>
              <p>Corporate Headquarters</p>
              <p>Achieve3000</p>
              <p>1985 Cedar Bridge Ave., Suite 3</p>
              <p>Lakewood, NJ 08701</p>
              <h3>General Contact</h3>
              <p>Toll-Free: 888-968-6822</p>
              <p>Phone: 732-367-5505</p>
              <p>Fax: 732-367-2313</p>
              <p>Email: office@achieve3000.com</p>
              <h3>Sales Info & Inquiries</h3>
              <p>Toll-Free: 800-838-8771</p>
              <p>Email: info@achieve3000.com</p>
              <h3>International Sales</h3>
              <p>Email: international@achieve3000.com</p>
              <p>Phone: 732-987-3669</p>
              <p>
                Schedule: Monday - Thursday 1:15 AM to 9:00 PM ET | Friday 8:00
                AM to 9:00 PM ET
              </p>

              <p>Google map</p>
              <p>Sing up</p>

              <p>First name </p>
              <p>Last name </p>
              <p>Email</p>
              <p>Phone </p>
            </div>

        </Reveal>
        <Footer />
      </>
    );
  }
}

export default Contact;
