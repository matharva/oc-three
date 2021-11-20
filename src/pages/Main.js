import React, { useState, useRef, useEffect } from "react";

// Styles
import "../styles/Main.scss";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import ThreeContainer from "../components/ThreeContainer";
import Sidebar from "../components/Sidebar";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

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
        {/* <div className="menu-container">
        <PhoneIcon onClick={() => setMenu(true)} />
        <div className="nav-img-container">
          <img src={Oc} alt="" />
        </div>
        <div className="account-icon">
          <PhoneIcon />
        </div>
      </div> */}
        {/* <div className="" style={{ padding: "2rem" }}> */}
        <div className="model-box" ref={centerRef}>
          <ThreeContainer />
          {/* <div className="marker"></div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Main;
