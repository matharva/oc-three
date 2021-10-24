import React, { useState, useRef, useEffect } from "react";

// Styles
import "../styles/Main.scss";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import ThreeContainer from "./ThreeContainer";
import Sidebar from "./Sidebar";

const Main = () => {
  const boxRef = useRef(null);
  const centerRef = useRef(null);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    console.log(boxRef);
    console.log(centerRef);
  }, [boxRef, centerRef]);
  return (
    <div className="main-container">
      <div className="menu-container">
        <MenuIcon onClick={() => setMenu(true)} />
        <div className="nav-img-container">
          <img src={Oc} alt="" />
        </div>
        <div className="account-icon">
          <AccountCircleIcon />
        </div>
      </div>
      {menu ? <Sidebar setMenu={setMenu} /> : null}
      <div className="model-box" ref={centerRef}>
        <ThreeContainer />
        {/* <div className="marker"></div> */}
      </div>
    </div>
  );
};

export default Main;
