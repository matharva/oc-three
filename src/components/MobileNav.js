import React, { useState } from "react";
import { useHistory } from "react-router";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import Sidebar from "../components/Sidebar";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-menu">
          <MenuIcon onClick={() => setMenu(true)} />
        </div>
        <div className="nav-logo" onClick={() => history.push("/")}>
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
