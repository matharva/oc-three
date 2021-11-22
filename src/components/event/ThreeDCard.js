import React, { useEffect } from "react";

// External Components
import Tilt from "react-tilt";

// Styles
import "../../styles/ThreeDCard.scss";
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
          background: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.1)
          ), url(${data.img}) no-repeat center / cover`,
        }}
      >
        <div class="card-text card2">{data.name}</div>
      </div>
    </Tilt>
  );
};

export default ThreeDCard;
