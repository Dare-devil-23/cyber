import React from "react";
import "./headerMain.css";
import logo from "../../assets/logo.png";
import { Link } from "@reach/router";
import { useState, useLayoutEffect } from "react";
import Rev from "../../Main/Rev";
import "react-dropdown/style.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useStickyHeader = (offset = 0) => {
  
  const [stick, setStick] = useState(false);
  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return stick;
};

const HeaderMain = () => {
  const [active, setActive] = useState("menu");
  const [icon, setIcon] = useState(true);
  const [mobIcon, setMobicon] = useState(false);
  const [isSideNav , setIsSideNav] = useState(false);
  const [downClick , setDownclick] = useState(false);
  const navToggle = () => {
    if (active === "menu") {
      setActive("menu active");
      setIsSideNav(true);
    } else {
      setActive("menu");
      setIsSideNav(false);
    }

    // Icon Toggler
    if (mobIcon === true) {
      setMobicon(false);
    } else setMobicon(true);
  };
  const sticky = useStickyHeader(10);
  const headerClasses = `main-nav ${sticky ? "sticky" : ""}`;

  const data = [
    { id: 0, lable: "Digital Services" },
    { id: 1, lable: "Cyber Security" },
    { id: 2, lable: "BlockChain Technology" },
    { id: 3, lable: "Qantum Computing" },
    { id: 4, lable: "Medical IT" },
    { id: 5, lable: "DevOps & Automation" },
    { id: 6, lable: "AI & IOT" },
    { id: 7, lable: "Testing Services" },
    { id: 8, lable: "Staffing or Recruitment" },
  ];

  const changeIcon = (icon) => {
    setIcon(!icon);
  };
  isSideNav ? disableBodyScroll(document) : enableBodyScroll(document)

  
  return (
    <div className={headerClasses} >
      <div className="logoContainer">
        <Link to="/home"><img src={logo} alt="logo" className="cyberLogo" /></Link>
      </div>

      <div className={active} >
        <div className="spaces">
        <div className="navbar-item">
          <Link to="/">
            <Rev data="Home" />
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/aboutus">
            <Rev data="About Us" />
          </Link>
        </div>
        <div className="dropdown" onMouseEnter={()=>changeIcon()} onMouseLeave={()=>changeIcon(icon)} onClick={()=>setDownclick(!downClick)}>
          <button className={` ${downClick ? "dropbtn navbar-item dropdownClick" : "dropbtn navbar-item"}`} >
            <Rev data="Services" />
            {icon ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div className="dropdown-content">
            {data.map((product) => (
              <Link to={`/product/${product.lable.toLowerCase().replace(' ' , '_')}`} className="drop-item" key={product.id}>
                <Rev data={product.lable} />
              </Link>
            ))}
            
          </div>
        </div>

        <div className="navbar-item">
          <Link to="/carrier">
            <Rev data="Carriers" />
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/training">
            <Rev data="Training" />
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/contact">
            <Rev data="Contact Us" />
          </Link>
        </div>
        </div>
      </div>
      {mobIcon ? (
        <AiOutlineClose className="nav-toggle" onClick={navToggle} />
      ) : (
        <AiOutlineMenu className="nav-toggle" onClick={navToggle} />
      )}
     
    </div>
  );
};

export default HeaderMain;
