import React from "react";
import { Link, useHistory } from "react-router-dom";

// Assets
import Oc from "../assets/Oculus.png";
import { useAuth } from "../contexts/AppContext";

const DesktopNav = () => {
  const { currentUser } = useAuth();
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
      name: `${currentUser ? "Profile" : "Login"}`,
      path: "contact",
    },
  ];

  const history = useHistory();
  return (
    <div className="navbar-desktop">
      <div className="nav-logo" onClick={() => history.push("/")}>
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
