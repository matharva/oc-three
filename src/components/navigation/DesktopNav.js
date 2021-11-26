import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//  Assets
import Oc from "../../assets/Oculus.png";

// Components
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import UserMenu from "./UserMenu";

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
  {
    name: "Privacy Policy",
    path: "privacy",
  },
];

const NavContent = () => {
  return (
    <>
      <HStack
        spacing={8}
        w="100%"
        paddingRight={10}
        justifyContent={"space-between"}
      >
        {/* OCULUS ICON */}
        <Link to="/">
          <Box boxSize="200px" style={{ height: "50px" }}>
            <Image w="100%" src={Oc} alt="Segun Adebayo" />
          </Box>
        </Link>

        {/* Nav Links*/}
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {navbarItems.map((item) => {
            return (
              <Link to={`/${item.path}`} style={{ color: "black" }}>
                <div className="nav-item">{item.name}</div>
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </>
  );
};

export default function DesktopNav() {
  return (
    <Box
      px={100}
      py={2}
      display={{ md: "block", base: "none" }}
      style={{
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        // backgroundImage:
        //   "linear-gradient(to LEFT, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
        color: "white",
      }}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <NavContent />
        <UserMenu />
      </Flex>
    </Box>
  );
}

// import LoginContainer from "./LoginContainer";

// const DesktopNav = () => {
//   const { currentUser } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const navbarItems = [
//     {
//       name: "Events",
//       path: "events",
//     },
//     {
//       name: "Sponsors",
//       path: "sponsors",
//     },
//     {
//       name: "Donation Drive",
//       path: "donation-drive",
//     },
//     // {
//     //   name: `${currentUser ? "Profile" : "Login"}`,
//     //   path: "profile",
//     // },
//     // {
//     //   name: `Logout`,
//     //   path: "",
//     //   fn: () => setIsOpen(true),
//     // },
//   ];

//   const history = useHistory();
//   return (
//     <>
//       <div className="navbar-desktop">
//         <div className="nav-logo" onClick={() => history.push("/")}>
//           <img src={Oc} alt="" />
//         </div>
//         <div className="nav-items">
//           {navbarItems.map((item) => {
//             return (
//               <Link onClick={item.fn} to={`/${item.path}`}>
//                 <div className="nav-item">{item.name}</div>
//               </Link>
//             );
//           })}

//           {currentUser ? (
//             <>
//               <Link to={`/profile`}>
//                 <div className="nav-item">Profile</div>
//               </Link>

//               <div className="nav-item" onClick={() => setIsOpen(true)}>
//                 Logout
//               </div>
//             </>
//           ) : (
//             <div className="nav-item" onClick={() => setIsOpen(true)}>
//               Login
//             </div>
//           )}
//         </div>
//       </div>
//       <LoginContainer isOpen={isOpen} setIsOpen={setIsOpen} />
//     </>
//   );
// };

// export default DesktopNav;
