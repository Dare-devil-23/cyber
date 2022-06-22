import React from "react";
import "./headerSmall.css";
import Rev from "../../Main/Rev";
// import { Container , Row , Col} from "react-bootstrap";
import { Link } from "@reach/router";
const HeaderSmall = () => {
  return (
    <div className="top-navbar">
      
          <div className='left-side'><Link to='/Home'><Rev data="Home" /></Link></div>
          <div className='right-side'>
            <div className="item"><Link to='/comingsoon'><Rev data="Media" /></Link></div>
            <div className="item"><Link to='/login'><Rev data="Login" /></Link></div>
          </div>
       
    </div>
  );
};

export default HeaderSmall;
