import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Assets
import Oc from "../assets/Oculus.png";

// Styles
import "../styles/Sidebar.scss";

const menuItems = [
  {
    title: "Events",
    icon: <CloseIcon />,
    path: "events",
  },
  {
    title: "Donation Drive",
    icon: "",
    path: "donation-drive",
  },
  {
    title: "Sponsors",
    icon: "",
    path: "sponsors",
  },
  {
    title: "Contact Us",
    icon: "",
    path: "contact",
  },
];

const Sidebar = ({ setMenu }) => {
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
            <Link to={`/${item.path}`}>
              <div className="sidebar-menu-item">
                <div className="sidebar-menu-item-icon"></div>
                <div className="sidebar-menu-item-title">{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
