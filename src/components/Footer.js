import React from "react";
import { useHistory } from "react-router";

// Assets
import Oc from "../assets/Oculus.png";

// Styles
import "../styles/Footer.scss";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo" onClick={() => history.push("/")}>
          <img src={Oc} alt="" />
        </div>
        <div className="footer-title">SARDAR PATEL INSTITUTE OF TECHNOLOGY</div>
        <div className="footer-subtitle">
          Munshi Nagar, Andheri(W), Mumbai-400058
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-nav-item">Events</div>
        <div className="footer-nav-item">Donation Drive</div>
        <div className="footer-nav-item">Sponsors</div>
        <div className="footer-nav-item">Download App</div>
      </div>
      <div className="footer-right">
        <div className="footer-text1">Contact Us</div>
        <div className="footer-text2">+9187654321, +9187654321</div>
        <div className="footer-text3">Join Us On</div>
        <div className="footer-icon-container">
          <div className="footer-icon">
            <InstagramIcon />
          </div>
          <div className="footer-icon">
            <FacebookIcon />
          </div>
          <div className="footer-icon">
            <LinkedInIcon />
          </div>
          <div className="footer-icon">
            <YouTubeIcon />
          </div>
          <div className="footer-icon">
            <WhatsAppIcon />
          </div>
          <div className="footer-icon">
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
