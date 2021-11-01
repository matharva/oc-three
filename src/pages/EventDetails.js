import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import tabs from "../components/tabs";
import TabComponent from "../components/TabComponent";

// External Components
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";

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
