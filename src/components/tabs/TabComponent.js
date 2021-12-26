import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import "../../styles/TabComponent.scss";

const tabVariant = {
  active: {
    width: "55%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  inactive: {
    width: "15%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    // opacity: 0,
    x: -30,
    // display: "none",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    // transitionEnd: { display: "none" },
  },
};

const tabTextVariantMobile = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    display: "none",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: "none" },
  },
};

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="container">
      <div className="tabs-component">
        {window.innerWidth > 720 ? (
          <ul className="tab-links" role="tablist">
            {tabs.map((tab, index) => (
              <motion.li
                key={tab.id}
                className={cn("tab", { active: activeTabIndex === index })}
                variants={tabVariant}
                // animate={activeTabIndex === index ? "active" : "inactive"}
                style={{
                  // border: "1px solid red",
                  backgroundColor: "transparent",
                  // backgroundImage:
                  //   " linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <a onClick={() => onTabClick(index)}>
                  <div className="img-icon-container">
                    {/* {tab.title} */}
                    <img src={tab.icon} alt="" />
                    {/* <Canvas style={{ width: "30px", height: "30px" }}>
                    <ambientLight intensity={0.5} />
                    <Box />
            
                  </Canvas> */}
                  </div>
                  <motion.span
                    variants={tabTextVariant}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="tab-title">{tab.title}</div>
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul className="tab-links" role="tablist">
            {tabs.map((tab, index) => (
              <motion.li
                key={tab.id}
                className={cn("tab", { active: activeTabIndex === index })}
                // className={cn("tab", { active: true })}
                // role="presentation"
                variants={tabVariant}
                animate={activeTabIndex === index ? "active" : "inactive"}
                style={{
                  // border: "1px solid red",
                  backgroundColor: "transparent",
                  // backgroundImage:
                  //   " linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <a onClick={() => onTabClick(index)}>
                  <div className="img-icon-container">
                    {/* {tab.title} */}
                    <img src={tab.icon} alt="" />
                    {/* <Canvas style={{ width: "30px", height: "30px" }}>
                    <ambientLight intensity={0.5} />
                    <Box />
            
                  </Canvas> */}
                  </div>
                  <motion.span
                    variants={tabTextVariantMobile}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="tab-title">{tab.title}</div>
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </ul>
        )}

        {tabs.map((tab, index) => (
          <tab.content
            key={tab.id}
            id={`${tab.id}-content`}
            active={activeTabIndex === index}
            cards={tab.cards}
          />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
