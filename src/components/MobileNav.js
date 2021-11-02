import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import Sidebar from "../components/Sidebar";

import LoginContainer from "./LoginContainer";
import { useAuth } from "../contexts/AppContext";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-menu">
          <MenuIcon onClick={() => setMenu(true)} />
        </div>
        <div className="nav-logo" onClick={() => history.push("/")}>
          <img src={Oc} alt="" />
        </div>
        <div className="account" onClick={() => setIsOpen(true)}>
          {currentUser ? (
            <div className="profile-img-container">
              <img src={currentUser.photo} alt="" />
            </div>
          ) : (
            <AccountCircleIcon />
          )}
        </div>
      </div>
      <LoginContainer isOpen={isOpen} setIsOpen={setIsOpen} />
      {menu ? <Sidebar setMenu={setMenu} /> : null}
    </>
  );
};

export default MobileNav;
