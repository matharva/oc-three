import React from "react";
import { Link, useHistory } from "react-router-dom";

// Components
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import UserMenu from "./UserMenu";

// Assets
import Oc from "../../assets/Oculus.png";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

const SidebarContent = ({ onClose, ...rest }) => {
  const history = useHistory();

  const LinkItems = [
    {
      name: "Events",
      path: "events",
      icon: FiHome,
      fn: () => history.push("/events"),
    },
    {
      name: "Sponsors",
      path: "sponsors",
      icon: FiTrendingUp,
      fn: () => history.push("/sponsors"),
    },
    {
      name: "Donation Drive",
      path: "donation-drive",
      icon: FiCompass,
      fn: () => history.push("/donation-drive"),
    },
    {
      name: "Market Place",
      path: "marketplace",
      icon: FiCompass,
      fn: () => history.push("/marketplace"),
    },
    {
      name: "Merchandise",
      path: "merch",
      icon: FiCompass,
      fn: () => history.push("/merch"),
    },
    // {
    //   name: "Privacy Policy",
    //   path: "privacy",
    //   icon: FiCompass,
    //   fn: () => history.push("/privacy"),
    // },
    // {
    //   name: "Refund Policy",
    //   path: "refund-policy",
    //   icon: FiCompass,
    //   fn: () => history.push("/refund-policy"),
    // },
    // {
    //   name: "Terms and Condition",
    //   path: "termsnconditions",
    //   icon: FiCompass,
    //   fn: () => history.push("/termsnconditions"),
    // },
    // { name: "Favourites", icon: FiStar },
    // { name: "Settings", icon: FiSettings },
  ];

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
        {/* OCULUS ICON */}
        <Link to="/">
          <Box boxSize="150px" style={{ height: "30px" }}>
            <Image w="100%" src={Oc} alt="Segun Adebayo" />
          </Box>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={link.path} onClick={link.fn}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
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
  );
};

const NavbarContent = ({ onOpen, ...rest }) => {
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

      {/* Oculus Image */}
      <Link to="/">
        <Box boxSize="150px" style={{ height: "40px" }}>
          <Image w="100%" src={Oc} alt="Segun Adebayo" />
        </Box>
      </Link>

      <UserMenu />
    </Flex>
  );
};

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
        <DrawerContent display={{ base: "block", md: "none" }}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <NavbarContent display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
}
