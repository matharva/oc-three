import React, { useState, useRef, useEffect } from "react";

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

const Main = () => {
  const boxRef = useRef(null);
  const centerRef = useRef(null);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    console.log(boxRef);
    console.log(centerRef);
  }, [boxRef, centerRef]);
  return (
    <div className="main_wrapper">
      <DesktopNav />
      <MobileNav />
      <div className="main-container">
        <div className="model-box" ref={centerRef}>
          <ThreeContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
