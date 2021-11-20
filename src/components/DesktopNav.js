// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";

// // Assets
// import Oc from "../assets/Oculus.png";
// import { useAuth } from "../contexts/AppContext";
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

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// // Assets
import Oc from "../assets/Oculus.png";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function DesktopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={100}
        py={2}
        display={{ md: "block", base: "none" }}
        style={{
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
          // backgroundImage:
          //   "linear-gradient(to LEFT, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
          background: "rgb(40, 20, 58)",
          color: "white",
        }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            w="100%"
            paddingRight={10}
            justifyContent={"space-between"}
          >
            <Box boxSize="150px" style={{ height: "40px" }}>
              {/* <Box boxSize="40px"> */}
              <Image w="100%" src={Oc} alt="Segun Adebayo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
