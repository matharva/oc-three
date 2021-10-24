import React, { useRef, useEffect, useState } from "react";

// Styles
import "./styles.scss";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// Components
import ThreeContainer from "./components/ThreeContainer";
import Sidebar from "./components/Sidebar";

export default function App() {
  const boxRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    console.log(boxRef);
    console.log(centerRef);
  }, [boxRef, centerRef]);

  const [menu, setMenu] = useState(false);

  return (
    <div className="main-container">
      <div className="menu-container">
        <MenuIcon onClick={() => setMenu(true)} />
      </div>
      {menu ? <Sidebar setMenu={setMenu} /> : null}
      <div className="model-box" ref={centerRef}>
        <ThreeContainer />
        {/* <div className="marker"></div> */}
      </div>
    </div>
  );
}
