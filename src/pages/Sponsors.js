import React from "react";

// Components
import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";

// Styles
import "../styles/Sponsor.scss";

// Assets
import Ac from "../assets/Acoustique.png";

const Sponsors = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <div className="sponsor-main">
        <div className="title">Our Sponsors</div>
        <div className="sponsor-img-container">
          <img src={Ac} alt="" />
        </div>
        <h1>Co-title Sponsor</h1>
        <div className="sponsor-grid">
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
          <div className="sponsor-item">
            <div className="sponsor-img-container">
              <img src={Ac} alt="" />
            </div>
            <h1>Co-title Sponsor</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
