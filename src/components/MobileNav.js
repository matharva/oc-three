import React, { useState } from "react";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import Sidebar from "../components/Sidebar";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-menu">
          <MenuIcon onClick={() => setMenu(true)} />
        </div>
        <div className="nav-logo">
          <img src={Oc} alt="" />
        </div>
        <div className="account">
          <AccountCircleIcon />
        </div>
      </div>
      {menu ? <Sidebar setMenu={setMenu} /> : null}
    </>
  );
};

export default MobileNav;
