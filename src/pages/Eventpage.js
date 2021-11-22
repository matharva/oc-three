import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

// Components
import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";
import tabs from "../components/tabs/tabs";
import TabComponent from "../components/tabs/TabComponent";
import Footer from "../components/Footer";

// External Components
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Eventpage = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <MobileNav />
      <DesktopNav />

      <div className="tabs-container">
        <TabComponent tabs={tabs} />
      </div>

      <Footer />
    </div>
  );
};

export default Eventpage;
