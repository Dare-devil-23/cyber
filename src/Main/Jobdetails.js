import React from 'react';
import { createGlobalStyle } from "styled-components";
import HeaderMain from "./menu/HeaderMain";
import Footer from "./components/footer";
import { Card } from "react-bootstrap";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { Parallax } from "react-parallax";
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
  const empty = location.state.empty;

  return (
    <>
      <HeaderMain />
      {/* <HeaderSmall /> */}
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
        strength={500}
        bgImageStyle={{
          height: "110vh", width: "100%",

        }} >
        <div>


          {/* <GlobalStyles /> */}
          <section className="contianer mx-5 my-3" >
            <br />

            <div className='jdetail'>
              <h2>{data?.role}</h2>
              <h6>{data?.location}</h6>
              <Card bg="dark" className='p-4'>
                {
                 data?.respo &&
                 <>
                   <Card.Title>
                     Responsibilities:
                   </Card.Title>
                   <Card.Text className="px-3" style={{fontSize:"18px"}}>
                     {data?.respo}
                   </Card.Text>
                 </>}{
               data?.duties  &&
                 <>
                   <Card.Title>
                     Job Duties:
                   </Card.Title>
                   <Card.Text className="px-3" style={{fontSize:"18px"}}>
                     <ul>{data?.duties.map((d , i)=>{
                         return(
                           <li key={i}>{d}</li>
                         )
                     })}</ul>
                   </Card.Text>
                 </> }{
                 data?.quali &&
                 <>
                 <Card.Title>
                   Qualifications:
                   </Card.Title>
                   <Card.Text className="px-3" style={{fontSize:"18px"}}>
                     <ul>{data?.quali.map((d , i)=>{
                         return(
                           <li key={i}>{d}</li>
                         )
                     })}</ul>
                   </Card.Text></> 
                }
              </Card>
              
            </div>

          </section>
         
        </div>
      </Parallax>
      <Footer />
    </>
  );
}

export default Jobdetails;