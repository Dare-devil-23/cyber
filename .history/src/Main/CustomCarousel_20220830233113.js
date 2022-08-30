import React ,{useState} from "react";
import { Carousel } from "react-bootstrap";

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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="curosole"
      controls={false}
      indicators={false}
    >
      <Carousel.Item interval={4800}>
        <img src={digitalServices} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={cybeSecurity} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={blockChain} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={quantumComputing} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={medicalIt} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={devOps} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={aiIot} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={testingServices} />
      </Carousel.Item>
      <Carousel.Item interval={4800}>
        <img src={staffing} />
      </Carousel.Item>
    </Carousel>
  );
}
