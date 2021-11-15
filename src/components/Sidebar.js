import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Assets
import Oc from "../assets/Oculus.png";

// Styles
import "../styles/Sidebar.scss";
import { useAuth } from "../contexts/AppContext";

const Sidebar = ({ setMenu }) => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
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
    // {
    //   title: `${currentUser ? "Profile" : "Login"}`,
    //   path: "profile",
    // },
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
              <Link to={`/${item.path}`} onClick={() => setMenu(false)}>
                <div className="sidebar-menu-item-icon"></div>
                <div className="sidebar-menu-item-title">{item.title}</div>
              </Link>
            </div>
          );
        })}

        {currentUser ? (
          <>
            <Link to={`/profile`}>
              <div className="sidebar-menu-item">
                <div className="sidebar-menu-item-title">Profile</div>
              </div>
            </Link>

            <div className="sidebar-menu-item" onClick={() => setIsOpen(true)}>
              <div className="sidebar-menu-item-title">Logout</div>
            </div>
          </>
        ) : (
          <div className="sidebar-menu-item" onClick={() => setIsOpen(true)}>
            <div className="sidebar-menu-item-title">Login</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
