import React from 'react';
import { createGlobalStyle } from "styled-components";
import HeaderSmall from "./menu/HeaderSmall";
import HeaderMain from "./menu/HeaderMain";
import Footer from "./components/footer";
import { Tabs, Tab } from "react-bootstrap";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

import { useLocation } from '@reach/router';

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

function Jobdetails() {

  const location = useLocation()

  const data = location.state.from;

  return ( 
    <>
                <HeaderSmall />

                <div>
                    <HeaderMain />
                    <GlobalStyles />
                    <section className="contianer" style={{ backgroundImage: `url(${'./img/background/7.jpg'})` }}>
                        <br />

                        <div className='jdetail'>
                            <h1>[Contract] {data.name}</h1>
                            <h6>{data.address}</h6>
                        </div>

                    </section>
                    <div
                        className="container"
                        style={{ minHeight: "60vh" }}
                    >
                      <div id="tabs1">
                            <Tabs  defaultActiveKey="Role OverView">
                               
                               
                                <Tab eventKey="Role OverView" title="Role OverView">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <div>
                                            <p>
                                                Est quis nulla laborum officia ad nisi ex nostrud culpa
                                                Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut
                                                duis ipsum nisi elit fugiat commodo sunt reprehenderit
                                                laborum veniam eu veniam. Eiusmod minim exercitation
                                                fugiat irure ex labore incididunt do fugiat commodo
                                                aliquip sit id deserunt reprehenderit aliquip nostrud.
                                                Amet ex cupidatat excepteur aute veniam incididunt
                                                mollit cupidatat esse irure officia elit do ipsum
                                                ullamco Lorem.
                                            </p>
                                        </div>
                                    </Reveal>
                                </Tab>
                                <Tab eventKey="Application" title="Application">
                                    <Reveal
                                        className="onStep"
                                        keyframes={fadeLeft}
                                        delay={300}
                                        duration={600}
                                        triggerOnce
                                    >
                                        <div>
                                            <p>
                                                Est quis nulla laborum officia ad nisi ex nostrud culpa
                                                Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut
                                                duis ipsum nisi elit fugiat commodo sunt reprehenderit
                                                laborum veniam eu veniam. Eiusmod minim exercitation
                                                fugiat irure ex labore incididunt do fugiat commodo
                                                aliquip sit id deserunt reprehenderit aliquip nostrud.
                                                Amet ex cupidatat excepteur aute veniam incididunt
                                                mollit cupidatat esse irure officia elit do ipsum
                                                ullamco Lorem.
                                            </p>
                                        </div>
                                    </Reveal>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
   );
}

export default Jobdetails;