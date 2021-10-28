import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import Sidebar from "./Sidebar";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-menu">
          <MenuIcon onClick={() => setMenu(true)} />
        </div>
        <div className="nav-logo">
          <img src={Oc} alt="" />
        </div>
        <div className="account">
          <AccountCircleIcon />
        </div>
      </div>
      {menu ? <Sidebar setMenu={setMenu} /> : null}
    </>
  );
};

const navbarItems = [
  {
    name: "Events",
    path: "events",
  },
  {
    name: "Sponsors",
    path: "events",
  },
  {
    name: "Donation Drive",
    path: "events",
  },
  {
    name: "Contact Us",
    path: "events",
  },
];

const DesktopNav = () => {
  return (
    <>
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
    </>
  );
};

const EventDetails = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();

  console.log(url, path);

  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <div className="">All Events</div>
      <Link to="/">back </Link>
      <Link to={`${url}/codatron`}>Link to codatron here</Link>
    </div>
  );
};

export default EventDetails;
