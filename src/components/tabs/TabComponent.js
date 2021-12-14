import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import "../../styles/TabComponent.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OC_BG } from "../../services/helpers";

function Box() {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
    boxRef.current.rotation.x += 0.01;
  });

  return (
    <mesh position={[0, 0, 0]} scale={[3, 3, 3]} ref={boxRef}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

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
    opacity: 0,
    x: -30,
    // display: "none",
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

  // Default to a tab based on the URL hash value
  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );
    setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [tabs, defaultIndex]);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="container">
      <div className="tabs-component">
        <ul className="tab-links" role="tablist">
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.id}
              className={cn("tab", { active: activeTabIndex === index })}
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
                  {/* <img src={tab.icon} alt="" /> */}
                  <Canvas style={{ width: "30px", height: "30px" }}>
                    <ambientLight intensity={0.5} />
                    <Box />
                  </Canvas>
                </div>
                <motion.span
                  variants={tabTextVariant}
                  style={
                    index === activeTabIndex
                      ? {
                          color:
                            "linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
                          fontFamily: "'Lobster', cursive;",
                          // display: "none",
                        }
                      : {
                          display: "none",
                          fontFamily: "'Lobster', cursive;",
                        }
                  }
                >
                  <div className="tab-title">{tab.title}</div>
                </motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
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
