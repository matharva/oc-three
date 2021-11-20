import React from "react";
import { useHistory } from "react-router";

// Assets
import Download from "../assets/android-download.png";

// Styles
import "../styles/Footer.scss";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo" onClick={() => history.push("/")}>
          <img src={Download} alt="" />
        </div>
      </div>
      {/*<div className="footer-middle">
        <div className="footer-nav-item">Events</div>
        <div className="footer-nav-item">Donation Drive</div>
        <div className="footer-nav-item">Sponsors</div>
        <div className="footer-nav-item">Download App</div>
      </div> */}
      <div className="footer-right">
        <div className="footer-text1">Contact Us</div>
        <div className="footer-text2">+9187654321, +9187654321</div>
        <div className="footer-text3">Join Us On</div>
        <div className="footer-icon-container">
          <div className="footer-icon">
            <PhoneIcon />
          </div>
          <div className="footer-icon">
            <PhoneIcon />
          </div>
          <div className="footer-icon">
            <PhoneIcon />
          </div>
          <div className="footer-icon">
            <PhoneIcon />
          </div>
          <div className="footer-icon">
            <PhoneIcon />
          </div>
          <div className="footer-icon">
            <PhoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
