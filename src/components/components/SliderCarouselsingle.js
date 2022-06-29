import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
                      <img  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="lazy img-fluid" alt=""/>
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
                      <img  src="https://images.unsplash.com/photo-1643139114208-aeb54ff4da72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="lazy img-fluid" alt=""/>
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
                      <img  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="lazy img-fluid" alt=""/>
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
                      <img src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
