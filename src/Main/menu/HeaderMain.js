import React from "react";
import "./headerMain.css";
import logo from "../../assets/logo.png";
import { Link } from "@reach/router";
import { useState, useLayoutEffect } from "react";
import Rev from "../../Main/Rev";
import "react-dropdown/style.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
  const [icon, setIcon] = useState(false);
  const [mobIcon, setMobicon] = useState(false);
  const navToggle = () => {
    if (active === "menu") {
      setActive("menu active");
    } else setActive("menu");

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

  const changeIcon = () => {
    setIcon(!icon);
  };
  return (
    <div className={headerClasses}>
      <div className="logoContainer">
        <img src={logo} alt="logo" className="cyberLogo" />
      </div>

      <div className={active}>
        <div className="dropdown navbar-item" >
          <button className="dropbtn" >
            <Rev data="Services" />
            {icon ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div className="dropdown-content">
            {data.map((product) => (
              <Link key={product.id} to="/comingsoon" className="drop-item">
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
            <Rev data="Contact" />
          </Link>
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
