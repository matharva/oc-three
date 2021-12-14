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

const Main = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="main_wrapper">
      <DesktopNav />
      <MobileNav />
      <div className="main-container">
        <div className="model-box">
          {loading && <CustomLoader />}
          <ThreeContainer setLoading={setLoading} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
