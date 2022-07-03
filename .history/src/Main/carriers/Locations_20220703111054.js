import { Component } from "react";
import * as React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  Card } from "react-bootstrap";

// import { WithStyles } from "@material-ui/core/styles";
class Locations extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
        >
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://st2.depositphotos.com/3895411/8345/i/950/depositphotos_83451516-stock-photo-bangalore-pinned-on-a-map.jpg"
              />
              <Card.Body>
                <Card.Title>Banglore</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://st2.depositphotos.com/3895411/8345/i/950/depositphotos_83451472-stock-photo-hyderabad-pinned-on-a-map.jpg"
              />
              <Card.Body>
                <Card.Title>Hyderabad</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.gettyimages.com/photos/map-pin-placed-in-mumbai-india-on-map-closeup-picture-id200551049-001?s=2048x2048"
              />
              <Card.Body>
                <Card.Title>Pune</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://previews.agefotostock.com/previewimage/medibigoff/6297cb4d0f1cfd1a5da4e157291d6bba/esy-034837349.jpg"
              />
              <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://thumbs.dreamstime.com/z/shallow-depth-field-focus-geographical-map-location-chennai-madras-city-tamil-nadu-india-asia-continent-atlas-183145877.jpg"
              />
              <Card.Body>
                <Card.Title>Chennai</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button>  */}
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Locations;
