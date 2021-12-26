import React, { useState, useRef, useEffect, Suspense } from "react";

// Styles
import "../styles/Main.scss";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import ThreeContainer from "../components/ThreeDModel/ThreeContainer";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";
import Footer from "../components/Footer";
import CustomLoader from "../components/Customloader";
import Loader3d from "../components/ThreeDModel/Loader3d";
import EventCarousel from "../components/event/EventCarousel";

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="model-box">{children}</div>
      </div>
    </>
  );
};

const Main = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="main_wrapper">
      <DesktopNav />
      <MobileNav />

      <MainContainer>
        {/* <ThreeContainer loading={loading} setLoading={setLoading} /> */}
        <Loader3d />
      </MainContainer>

      <div className="main-container">
        <div
          className="model-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EventCarousel />
        </div>
      </div>

      <div className="main-container">
        <div
          className="model-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Our College
        </div>
      </div>
      <div className="main-container">
        <div
          className="model-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sponsors
        </div>
      </div>
      <div className="main-container">
        <div
          className="model-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          mnerch
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
