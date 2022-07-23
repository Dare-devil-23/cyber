import React from "react";
import "./aboutNew.css";
import { Parallax } from "react-parallax";

const AboutNew = () => {
  return (

    <div className="ping-pong">
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
        strength={500}
      >
        <div className="sec container">
          <div className="content">
            <h1>1.Quality</h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled itgalley of type and scrambled it
            </p>
          </div>

          <div className="img">
            <img
              whileTap={{ scale: 0.9 }}
              className="homeimg"
              src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="one"
            />
          </div>
        </div>
      </Parallax>
      <div className="sec">
        <div className="spimg-1">
          <img
            whileTap={{ scale: 0.9 }}
            className="homeimg"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="two"
          />
        </div>
        <div className="content">
          <h1 className="">2.Maintenance</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            itgalley of type and scrambled it
          </p>
        </div>

        <div className="spimg-2">
          <img
            whileTap={{ scale: 0.9 }}
            className="homeimg"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="two"
          />
        </div>
      </div>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
        strength={500}
      >
      <div className="sec">
        <div className="content">
          <h1 className="">3.Scalability</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            itgalley of type and scrambled it
          </p>
        </div>
        <div className="img">
          <img
            whileTap={{ scale: 0.9 }}
            className="homeimg"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="three"
          />
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default AboutNew;
