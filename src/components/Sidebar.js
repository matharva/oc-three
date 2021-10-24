import React, { useState } from "react";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Assets
import Oc from "../assets/Oculus.png";

// Styles
import "../styles/Sidebar.scss";

const Sidebar = ({ setMenu }) => {
  const menuItems = [
    {
      title: "Events",
      icon: <CloseIcon />,
      path: "",
    },
    {
      title: "Donation Drive",
      icon: "",
      path: "",
    },
    {
      title: "Sponsors",
      icon: "",
      path: "",
    },
    {
      title: "Contact Us",
      icon: "",
      path: "",
    },
  ];
  return (
    <div className="sidebar">
      <div className="close-icon-container">
        <CloseIcon onClick={() => setMenu(false)} />
      </div>
      <div className="sidebar-header">
        <div className="header-img-container">
          <img src={Oc} alt="" />
        </div>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item) => {
          return (
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-icon"></div>
              <div className="sidebar-menu-item-title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
