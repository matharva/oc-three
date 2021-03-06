import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//  Assets
import Oc from "../../assets/Oculus.png";

// Components
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import UserMenu from "./UserMenu";
import { OC_BG_DARK } from "../../services/helpers";

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
    name: "Market Place",
    path: "marketplace",
  },
  {
    name: "Merchandise",
    path: "merch",
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
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
          style={{ position: "relative" }}
        >
          {navbarItems.map((item, index) => {
            return (
              <Link to={`/${item.path}`} style={{ color: "white" }}>
                <div
                  className="nav-item glitch"
                  data-glitch={`${item.name}`}
                  style={{
                    left: `${index * 100}px`,
                    transform: " translateX(10px)",
                  }}
                >
                  {item.name}
                </div>
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
      bg={OC_BG_DARK}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <NavContent />
        <UserMenu />
      </Flex>
    </Box>
  );
}
