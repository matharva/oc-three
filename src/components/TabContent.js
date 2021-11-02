import React from "react";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import cardImage from "./assets/card-image.jpg";

// Assets
import Codewars from "../assets/Codewars.jpg";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: "none",
  },
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const TabContent = ({ id, active, cards }) => {
  console.log("dard", id);
  return (
    <motion.div
      role="tabpanel"
      id={id}
      className="tab-content"
      variants={tabContentVariant}
      animate={active ? "active" : "inactive"}
      initial="inactive"
    >
      <div className="cards">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="content-card"
          >
            <Link to={`/events/${item.path}`}>
              <ThreeDCard data={item} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TabContent;
