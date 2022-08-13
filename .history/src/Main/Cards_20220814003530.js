import React, { useState } from "react";
import "./cards.css";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text-hide">
      {isReadMore ? text.slice(0, 150) : text}
      <p onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "read more" : "show less"}
      </p>
    </div>
  );
};

const Cards = () => (
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-3">
      <Parallax speed={10}>
      <motion.div
        whileHover={{ rotate: -2, scale: 1.01 }}
        transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
        
          <i className="bg-color-2 i-boxed icon_shield_alt cardicon"></i>

          <div className="text">
            <div className="cardtitle">
            <h2>Confidentiality</h2>
            </div>
            

            <div className="break-text">
              <ReadMore>
                  ensures that sensitive information are accessed only 
                  by an authorized person and kept away from those not 
                  authorized to possess them. It is implemented using 
                  security mechanisms such as usernames, passwords, 
                  access control lists (ACLs), and encryption.
              </ReadMore>
            </div>
          </div>
          
          <i className="wm icon_shield_alt"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
    <Parallax speed={10}>
      <motion.div
          whileHover={{ rotate: -2, scale: 1.01 }}
          transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_clock cardicon"></i>

          <div className="text">
            <div className="cardtitle">
            <h2>Availability</h2>
            </div>
            <div className="break-text">
              <ReadMore>
                  Availability – ensures that information and 
                  resources are available to those who need them. 
                  It is implemented using methods such as 
                  hardware maintenance, software patching 
                  and network optimization
              </ReadMore>
            </div>
          </div>
          <i className="wm icon_clock"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
    <Parallax speed={10}>
      <motion.div
         whileHover={{ rotate: -2, scale: 1.01 }}
         transition={{ duration: 0.5 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_balance cardicon"></i>

          <div className="text">
            <div className="cardtitle">
            <h2>Integrity</h2>
            </div>
            

            <div className="break-text">
              <ReadMore>
                  ensures that information are in a format 
                  that is true and correct to its original purposes. 
                  The receiver of the information must have the 
                  information the creator intended him to have.
              </ReadMore>
            </div>
          </div>
          <i className="wm icon_balance"></i>
        </div>
      </motion.div>
      </Parallax>
    </div>
  </div>
);
export default Cards;
