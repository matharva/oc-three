import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

// Components
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import tabs from "../components/tabs";
import TabComponent from "../components/TabComponent";

// External Components
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <MobileNav />
      <DesktopNav />

      <div className="tabs-container">
        <TabComponent tabs={tabs} />
      </div>

      <Footer />

      <Link to="/">back </Link>
      <Link to={`${url}/codatron`}>Link to codatron here</Link>
    </div>
  );
};

export default EventDetails;
