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
import ThreeDCard from "./ThreeDCard";
import tabs from "./tabs";
import TabComponent from "./TabComponent";

// External Components
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";

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

const MobileEvents = () => {
  return (
    <div className="mobile-container">
      <TabComponent tabs={tabs} />
    </div>
  );
};

const DesktopEvents = () => {
  return (
    <div className="desktop-container">
      {/* <div className="event-category-row">
        <div className="event-category-row-title">Tech Events</div>
        <div className="event-category-row-cards">
          <OwlCarousel className="owl-theme">
            <ThreeDCard />
            <ThreeDCard />
            <ThreeDCard />
            <ThreeDCard />
          </OwlCarousel>
        </div>
      </div> */}
      <TabComponent tabs={tabs} />
    </div>
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

      <MobileEvents />
      <DesktopEvents />

      <Link to="/">back </Link>
      <Link to={`${url}/codatron`}>Link to codatron here</Link>
    </div>
  );
};

export default EventDetails;
