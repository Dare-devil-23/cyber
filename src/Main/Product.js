import React ,{ Component } from "react";
// import Header from "../components/menu/header";
// import { createGlobalStyle } from "styled-components";
import Footer from "./components/footer";
// import { Breadcrumb } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
// import SliderCarouselsingle from '../components/components/SliderCarouselsingle';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HeaderSmall from "./menu/HeaderSmall";
import HeaderMain from "./menu/HeaderMain";
import BreadCrumbNav from "./BreadCrumbNav";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

// const GlobalStyles = createGlobalStyle`
//   header#myHeader.navbar.sticky.white {
//     background: #212428;
//     border-bottom: 0;
//     box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
//   }
//   header#myHeader.navbar .search #quick_search{
//     color: #fff;
//     background: rgba(255, 255, 255, .1);
//   }
//   header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
//     color: #fff;
//   }
//   header#myHeader .dropdown-toggle::after{
//     color: #fff;
//   }
//   header#myHeader .logo .d-block{
//     display: none !important;
//   }
//   header#myHeader .logo .d-none{
//     display: none !important;
//   }
//   header#myHeader .logo .d-3{
//     display: block !important;
//   }
//   .jumbotron.no-bg{
//     background: center bottom;
//     background-size: cover;
//     height: 100vh;
//   }
//   footer.footer-light .subfooter span img alt =" ".d-1{
//     display: none !important;
//   }
//   footer.footer-light .subfooter span img alt =" ".d-3{
//     display: inline-block !important;
//   }
//   .de_countdown{
//     right: 10px;
//     color: #fff;
//   }
//   .author_list_pp{
//     margin-left:0;
//   }
//   footer.footer-light .subfooter{
//     border-top: 1px solid rgba(255,255,255,.1);
//   }
// `;

class Product extends Component {
  render() {
    return (
      <>
        <HeaderSmall />
        <HeaderMain />
        {/* <GlobalStyles /> */}
        <div>
        
          
          <section
            className="jumbotron no-bg"
            style={{ display: "inline-block" }}
          >
            {/* <Particle /> */}
            <div className="container mt-5">
              {/* <div className="row align-items-center"> */}
              <BreadCrumbNav data={["services", "Products"]} />
              {/* </div> */}
            </div>
            <div>
              <Carousel showThumbs={false} autoPlay={true} showArrows={false}>
                <div>
                  <img alt =" " src="./img/carousel/crs-1.jpg" />
                </div>
                <div>
                  <img alt =" " src="./img/carousel/crs-2.jpg" />
                </div>
                <div>
                  <img alt =" " src="./img/carousel/crs-3.jpg" />
                </div>
              </Carousel>
            </div>
          </section>
          <div
            className="container"
            style={{ minHeight: "60vh", marginTop: "15px" }}
          >
            <div id="tabs1">
              <Tabs fill defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <Reveal
                    className="onStep"
                    keyframes={fadeLeft}
                    // delay={300}
                    duration={600}
                    triggerOnce
                  >
                    <div>
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </div>
                  </Reveal>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Reveal
                    className="onStep"
                    keyframes={fadeLeft}
                    // delay={300}
                    duration={600}
                    triggerOnce
                  >
                    <div>
                      <p>
                        Ad pariatur nostrud pariatur exercitation ipsum ipsum
                        culpa mollit commodo mollit ex. Aute sunt incididunt
                        amet commodo est sint nisi deserunt pariatur do. Aliquip
                        ex eiusmod voluptate exercitation cillum id incididunt
                        elit sunt. Qui minim sit magna Lorem id et dolore velit
                        Lorem amet exercitation duis deserunt. Anim id labore
                        elit adipisicing ut in id occaecat pariatur ut ullamco
                        ea tempor duis.
                      </p>
                    </div>
                  </Reveal>
                </Tab>
                <Tab eventKey="contact" title="Contact">
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
                <Tab eventKey="whyus " title="why us">
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
          <Footer />
        </div>
      </>
    );
  }
}

export default Product;
