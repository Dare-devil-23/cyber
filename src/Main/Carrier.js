import React ,{ Component } from "react";
import { createGlobalStyle } from "styled-components";
import HeaderSmall from "./menu/HeaderSmall";
import HeaderMain from "./menu/HeaderMain";
import Footer from "./components/footer";
import { Tabs, Tab } from "react-bootstrap";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

// import Gallery1 from "./Gallery1";

import Locations from "./carriers/Locations";
import FindJobs from "./carriers/FindJobs";
import OurValues from "./carriers/OurValues";
import Benifits from "./carriers/Benifits";
import Stories from "./carriers/Stories";

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

class Carrier extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {}
    render() {
        return (
            <>
                <HeaderSmall />
                <HeaderMain />
                <div>
                    
                    <GlobalStyles />

                    <div
                        className="container my-5"
                        
                    >
                        <div id="tabs1">
                            <Tabs fill defaultActiveKey="Find_jobs">
                                <Tab eventKey="Find_jobs" title="Find Jobs">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        // delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                       <FindJobs />
                                    </Reveal>
                                </Tab>
                                <Tab eventKey="Our_values" title="Our Values">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        // delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <OurValues />
                                    </Reveal>
                                </Tab>
                                <Tab eventKey="Benefits" title="Benefits">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <Benifits />
                                    </Reveal>
                                </Tab>
                                <Tab eventKey="locations" title="locations">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <div>
                                        <Locations />
                                        </div>
                                    </Reveal>
                                </Tab>
                                <Tab eventKey="stories" title="Stories">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <div>
                                        {/* <Gallery1 /> */}
                                        <Stories />
                                           
                                        </div>
                                    </Reveal>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>

                </div>
                <div>

                    <Footer />
                </div >
            </>
        );
    }
}

export default Carrier;