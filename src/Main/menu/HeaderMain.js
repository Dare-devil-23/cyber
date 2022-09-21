import React, { useRef } from "react";
import "./headerMain.css";
import logo from "../../assets/logo.png";
import cyberInfo from "../../assets/CYBERINFO.png";
// import augmented from "../../assets/AUGMENTED.png";
import { Link } from "@reach/router";
import { useState, useLayoutEffect } from "react";
import Rev from "../../Main/Rev";
import "react-dropdown/style.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import useReadingProgress from "./useReadingProgress";

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

const HeaderMain = (props) => {
  const [active, setActive] = useState("menu");
  const [icon, setIcon] = useState(true);
  const [aboutIcon, setAboutIcon] = useState(true);
  const [mobIcon, setMobicon] = useState(false);
  const [isSideNav, setIsSideNav] = useState(false);
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
    { id: 0, lable: "AI & IOT" },
    { id: 1, lable: "Qantum Computing" },
    { id: 2, lable: "BlockChain Technology" },
    { id: 3, lable: "Cyber Security" },
    { id: 4, lable: "Digital Services" },
    { id: 5, lable: "DevOps & Automation" },
    { id: 6, lable: "Medical IT" },
    { id: 7, lable: "Testing Services" },
    { id: 8, lable: "Staffing or Recruitment" },
  ];

  const changeIcon = (icon) => {
    setIcon(!icon);
  };
  const changeIconAbout = (aboutIcon) => {
    setAboutIcon(!aboutIcon);
  };
  isSideNav ? disableBodyScroll(document) : enableBodyScroll(document);
  const completion = useReadingProgress();
  return (
    <div className={headerClasses}>
      
        <Link to="/home">
        <div className="logoContainer">
          <div className="logodiv">
            <div><img src={logo} alt="logo" className="cyberLogo" /></div>
          </div>
          <div className="textdiv">
            {/* <div><img src={cyberInfo} alt="cyberinfo" className="cyberText" /></div> */}
            <div className="fontCyber">CYBER INFO</div>
            {/* <div><img src={augmented} alt="augmented" className="augmentedText" /></div> */}
          </div>
          </div>

        </Link>

      
      <div className={active}>
        <div className="spaces">
          <div className="navbar-item">
            <Link to="/">
              <Rev data="Home" />
            </Link>
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => changeIconAbout()}
            onMouseLeave={() => changeIconAbout(aboutIcon)}
          >
            <button className="dropbtn navbar-item">
              {props.home ? (
                <span onClick={props.onChangeRef} style={{ cursor: 'pointer' }}>
                  <Rev data="About Us" />
                </span>
              ) : (
                <span >
                  <Link to="/#aboutus">
                    <Rev data="About Us" />
                  </Link>
                </span>
              )}
              {aboutIcon ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            <div className="dropdown-content">
              <Link to="/login" > <Rev data="Login" /></Link>
              <Link to="/comingsoon" > <Rev data="Blog" /></Link>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => changeIcon()}
            onMouseLeave={() => changeIcon(icon)}
          >
            <button className="dropbtn navbar-item">
              <Rev data="Services" />
              {icon ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            <div className="dropdown-content">
              {data.map((product) => (
                <Link
                  to={`/product/${product.lable
                    .toLowerCase()
                    .replace(" ", "_")}`}
                  className="drop-item"
                  key={product.id}
                >
                  <Rev data={product.lable} />
                </Link>
              ))}
            </div>
          </div>

          <div className="navbar-item">
            <Link to="/careers">
              <Rev data="Careers" />
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
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="progressbar"
      />
    </div>
  );
};

export default HeaderMain;
