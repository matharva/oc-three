import React from "react";
import { Link } from "react-router-dom";

// Assets
import Oc from "../assets/Oculus.png";

const navbarItems = [
  {
    name: "Events",
    path: "events",
  },
  {
    name: "Sponsors",
    path: "sponsors",
  },
  {
    name: "Donation Drive",
    path: "donation-drive",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const DesktopNav = () => {
  return (
    <div className="navbar-desktop">
      <div className="nav-logo">
        <img src={Oc} alt="" />
      </div>
      <div className="nav-items">
        {navbarItems.map((item) => {
          return (
            <Link to={`/${item.path}`}>
              <div className="nav-item">{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNav;
