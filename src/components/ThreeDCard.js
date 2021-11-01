import React, { useEffect } from "react";
// import VanillaTilt from "../external/vanilla-tilt.min.js";
import Tilt from "react-tilt";
import Oc from "../assets/Codewars.jpg";
import "../styles/ThreeDCard.scss";
const ThreeDCard = ({ data }) => {
  return (
    <Tilt
      options={{
        glare: true,
        reverse: true,
        "max-glare": 0.05,
      }}
    >
      <div
        class="card rgb item"
        style={{
          background: `url(${Oc}) no-repeat center / cover`,
        }}
      >
        <div class="card-image card2"></div>
        {/* <img src={Oc} alt="" /> */}
        <div class="card-text card2"></div>
      </div>
    </Tilt>
  );
};

export default ThreeDCard;
