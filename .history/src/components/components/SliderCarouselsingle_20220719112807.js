import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cybeSecurity from "../../assets/CYBER-SECURTY.png";
import digitalServices from "../../assets/CYBER-SECURTY-2.png";
import blockChain from '../../assets/Block-Chain_Design.png';
import medicalIt from '../../assets/CS_03.png';
import aiIot from "../../assets/AI-IOT.png";
import quantumComputing from "../../assets/CYBER-SECURTY.png";
import testingServices from "../../assets/CYBER-SECURTY-2.png";
import staffing from '../../assets/Block-Chain_Design.png';
import devOps from '../../assets/CS_03.png';


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
      speed: 2000,
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
                  <span>
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Digital Services</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img  src={digitalServices} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Cyber Security</span>
                          <span className="nft_pic_by">Monica Lucas</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img  src={cybeSecurity} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">BlockChain Technology</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src={blockChain} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Qantum Computing</span>
                          <span className="nft_pic_by">Lori Hart</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src={quantumComputing} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Medical IT</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img  src={medicalIt} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={6}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">DevOps & Automation</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src={devOps} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={7}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">AI & IOT</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src={aiIot} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={8}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Testing Services</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src={testingServices} className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>
            <CustomSlide className='itm' index={9}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Staffing / Recruitment</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
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
