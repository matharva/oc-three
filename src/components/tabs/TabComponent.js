import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import "../../styles/TabComponent.scss";
import { useHistory } from "react-router";

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
              role="presentation"
              variants={tabVariant}
              animate={activeTabIndex === index ? "active" : "inactive"}
              style={{
                color: "white",
                backdropFilter: "blur(16px) saturate(180%)",
                // -webkit-backdrop-filter: blur(16px) saturate(180%);
                backgroundColor: "rgba(17, 25, 40, 0.75)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <a onClick={() => onTabClick(index)}>
                {/* {tab.icon} */}
                <div className="img-icon-container">
                  <img src={tab.icon} alt="" />
                </div>
                <motion.span
                  variants={tabTextVariant}
                  style={index === activeTabIndex ? {} : { color: "white" }}
                >
                  {tab.title}
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