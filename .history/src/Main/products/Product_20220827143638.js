import React , {useState} from "react";
import Footer from "../components/footer";
import { Tabs, Tab } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import HeaderSmall from "../menu/HeaderSmall";
import HeaderMain from "../menu/HeaderMain";
import BreadCrumbNav from "../BreadCrumbNav";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "./product.css";
import { data } from "./productData";

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

const Product = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <HeaderSmall />
      <HeaderMain />
      {data.map((product, i) => {
        {
          if (product.lable.toLowerCase().replace(" ", "_") === props.id) {
            return (
              <div key={i}>
                <section className="image-section">
                  <div className="container">
                    <BreadCrumbNav data={["services", "Products"]} />
                  </div>
                  <div className="container">
                    <h1>{product.lable}</h1>
                  </div>
                  <div className="images">
                    <Carousel
                      activeIndex={index} onSelect={handleSelect}
                      className="curosole"
                      indicators={false}
                      controls={false}
                    >
                      {Object.keys(product.images).map((img, index) => {
                        
                        return(
                          <Carousel.Item  key={index}>
                          <img
                          width="400px"
                          height="350px"
                          src={process.env.PUBLIC_URL+product.images[img]}
                          alt={`${img}`}
                          key={index}
                          style={{ borderRadius: "10px" }}
                        />
                        </Carousel.Item>
                        )
                    })}
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
                          duration={600}
                          triggerOnce
                        >
                          <div>{product.home}</div>
                        </Reveal>
                      </Tab>
                      <Tab eventKey="profile" title="Profile">
                        <Reveal
                          className="onStep"
                          keyframes={fadeLeft}
                          duration={600}
                          triggerOnce
                        >
                          <div>{product.profile}</div>
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
                          <div>{product.contact}</div>
                        </Reveal>
                      </Tab>
                      <Tab eventKey="whyus " title="why this">
                        <Reveal
                          className="onStep"
                          keyframes={fadeLeft}
                          delay={300}
                          duration={600}
                          triggerOnce
                        >
                          <div>{product.whyThis}</div>
                        </Reveal>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
                <Footer />
              </div>
            );
          }
        }
      })}
    </>
  );
};

export default Product;
