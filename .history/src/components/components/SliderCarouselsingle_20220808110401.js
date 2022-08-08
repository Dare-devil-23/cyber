import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cybeSecurity from "../../assets/Homepage/CyberSecurity.png";
import digitalServices from "../../assets/Homepage/Digital-Service.png";
import blockChain from '../../assets/Homepage/Block-chain.png';
import medicalIt from '../../assets/Homepage/Medical_IT.png';
import aiIot from "../../assets/Homepage/AI_IOT.png";
import quantumComputing from "../../assets/Homepage/Quantum-computing.png";
import testingServices from "../../assets/Homepage/TestingServices.png";
import staffing from '../../assets/Homepage/Staffing-services.png';
import devOps from '../../assets/Homepage/DevOps_Automation.png';


class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
      
  }
}

export default class Responsive extends Component {

  render() {
    var settings = {
      autoplay:true,
      autoplaySpeed:4200,
      infinite: true,
      speed: 2150,
      touchMove: false,
      dots : false,
      dotsClass:"d-none",
      draggable:false,
      arrows:false,
      slidesToShow: false,
      slidesToScroll: 0,
      initialSlide: 0,
      adaptiveHeight: false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
        <div className='nft-big'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img  src={digitalServices} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img  src={cybeSecurity} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={blockChain} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={quantumComputing} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img  src={medicalIt} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={6}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={devOps} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={7}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={aiIot} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={8}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={testingServices} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={9}>
              <div className="nft_pic">                            
                  
                  <div className="nft_pic_wrap">
                      <img src={staffing} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
