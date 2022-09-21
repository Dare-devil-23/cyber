import React ,{useState} from "react";
import { Carousel } from "react-bootstrap";
import "./customcarousel.css";
import cybeSecurity from "../assets/Homepage/CyberSecurity.png";
import digitalServices from "../assets/Homepage/Digital-Service.png";
import blockChain from "../assets/Homepage/Block-chain.png";
import medicalIt from "../assets/Homepage/Medical_IT.png";
import aiIot from "../assets/Homepage/AI_IOT.png";
import quantumComputing from "../assets/Homepage/Quantum-computing.png";
import testingServices from "../assets/Homepage/TestingServices.png";
import staffing from "../assets/Homepage/Staffing-services.png";
import devOps from "../assets/Homepage/DevOps_Automation.png";

export default function CustomCarousel() {
  return (
    <Carousel
    //   activeIndex={index}
      className="curosole"
      controls={false}
      indicators={false}
      touch={false}
      pause={false}
    >
      <Carousel.Item interval={4200}>
        <img src={digitalServices} />
      </Carousel.Item>
      <Carousel.Item interval={3700}>
        <img src={cybeSecurity} />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src={blockChain} />
      </Carousel.Item>
      <Carousel.Item interval={3600}>
        <img src={quantumComputing} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={medicalIt} />
      </Carousel.Item>
      <Carousel.Item interval={3900}>
        <img src={devOps} />
      </Carousel.Item>
      <Carousel.Item interval={2700}>
        <img src={aiIot} />
      </Carousel.Item>
      <Carousel.Item interval={3700}>
        <img src={testingServices} />
      </Carousel.Item>
      <Carousel.Item interval={4100}>
        <img src={staffing} />
      </Carousel.Item>
    </Carousel>
  );
}
