import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "./cards.css";
import { motion } from "framer-motion";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text-hide">
      {isReadMore ? text.slice(0, 150) : text}
      <p onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "read more" : "show less"}
      </p>
    </p>
  );
};

const Cards = () => (
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-3">
      <motion.div
        whileHover={{ rotate: -4, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>

          <div className="text">
            <h4 className="">Add your NFT's</h4>

            <p className="break-text">
              <ReadMore>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium
                doloremque laudantium, totam rem. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem.accusantium doloremque laudantium, totam
                rem.
              </ReadMore>
            </p>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </motion.div>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
      <motion.div
        whileHover={{ rotate: -4, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_tags_alt"></i>

          <div className="text">
            <h4 className="">Add your NFT's</h4>

            <p className="break-text">
              <ReadMore>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium
                doloremque laudantium, totam rem. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem.accusantium doloremque laudantium, totam
                rem.
              </ReadMore>
            </p>
          </div>
          <i className="wm icon_tags_alt"></i>
        </div>
      </motion.div>
    </div>{" "}
    <div className="col-lg-4 col-md-6 mb-3">
      <motion.div
        whileHover={{ rotate: -4, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <div className="feature-box f-boxed style-3">
          <i className=" bg-color-2 i-boxed icon_wallet"></i>

          <div className="text">
            <h4 className="">Add your NFT's</h4>

            <p className="break-text">
              <ReadMore>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.accusantium
                doloremque laudantium, totam rem. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem.accusantium doloremque laudantium, totam
                rem.
              </ReadMore>
            </p>
          </div>
          <i className="wm icon_wallet"></i>
        </div>
      </motion.div>
    </div>
  </div>
);
export default Cards;
