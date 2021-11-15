import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Assets
import Oc from "../assets/Oculus.png";
import { useAuth } from "../contexts/AppContext";
import LoginContainer from "./LoginContainer";

const DesktopNav = () => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = [
    {
      name: "Events",
      path: "events",
    },
    {
      name: "Sponsors",
      path: "sponsors",
    },
    {
      name: "Donation Drive",
      path: "donation-drive",
    },
    // {
    //   name: `${currentUser ? "Profile" : "Login"}`,
    //   path: "profile",
    // },
    // {
    //   name: `Logout`,
    //   path: "",
    //   fn: () => setIsOpen(true),
    // },
  ];

  const history = useHistory();
  return (
    <>
      <div className="navbar-desktop">
        <div className="nav-logo" onClick={() => history.push("/")}>
          <img src={Oc} alt="" />
        </div>
        <div className="nav-items">
          {navbarItems.map((item) => {
            return (
              <Link onClick={item.fn} to={`/${item.path}`}>
                <div className="nav-item">{item.name}</div>
              </Link>
            );
          })}

          {currentUser ? (
            <>
              <Link to={`/profile`}>
                <div className="nav-item">Profile</div>
              </Link>

              <div className="nav-item" onClick={() => setIsOpen(true)}>
                Logout
              </div>
            </>
          ) : (
            <div className="nav-item" onClick={() => setIsOpen(true)}>
              Login
            </div>
          )}
        </div>
      </div>
      <LoginContainer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DesktopNav;
