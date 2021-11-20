// import React, { useState } from "react";
// import { useHistory, useRouteMatch } from "react-router";

// // Icons
// import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

// // Assets
// import Oc from "../assets/Oculus.png";

// // Components
// import Sidebar from "../components/Sidebar";

// import LoginContainer from "./LoginContainer";
// import { useAuth } from "../contexts/AppContext";

// const MobileNav = () => {
//   const [menu, setMenu] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const history = useHistory();
//   const { currentUser, setCurrentUser } = useAuth();

//   return (
//     <>
//       <div className="navbar-mobile">
//         <div className="navbar-menu">
//           <PhoneIcon onClick={() => setMenu(true)} />
//         </div>
//         <div className="nav-logo" onClick={() => history.push("/")}>
//           <img src={Oc} alt="" />
//         </div>
//         <div className="account" onClick={() => setIsOpen(true)}>
//           {currentUser ? (
//             <div className="profile-img-container">
//               <img src={currentUser.photo} alt="" />
//             </div>
//           ) : (
//             <PhoneIcon />
//           )}
//         </div>
//       </div>
//       <LoginContainer isOpen={isOpen} setIsOpen={setIsOpen} />
//       {menu ? <Sidebar setMenu={setMenu} /> : null}
//     </>
//   );
// };

// export default MobileNav;

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

// // Assets
import Oc from "../assets/Oculus.png";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function MobileNav({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      display={{ md: "none", base: "block" }}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNavbar display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNavbar = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box boxSize="150px" style={{ height: "40px" }}>
        {/* <Box boxSize="40px"> */}
        <Image w="100%" src={Oc} alt="Segun Adebayo" />
      </Box>

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
  );
};
