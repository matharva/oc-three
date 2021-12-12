import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

// Components
import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";
import tabs from "../components/tabs/tabs";
import TabComponent from "../components/tabs/TabComponent";
import Footer from "../components/Footer";

const Eventpage = () => {
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
