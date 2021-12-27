import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Mob from "../../assets/test.png";

const ThemePage = () => {
  return (
    <Flex h={"100%"} direction={{ base: "column", xl: "row" }}>
      <Box flex={{ xl: "0.5", base: "0.3" }} order={{ base: 1, md: 2 }}>
        <Box boxSize="sm" height={"100%"} w={"100%"} p={10}>
          <Image
            src={Mob}
            alt="oc_mob"
            height="100%"
            objectFit={"cover"}
            margin={"0 auto"}
          />
        </Box>
      </Box>
      <Box flex={{ xl: "0.5", base: "0.7" }} order={{ base: 2, md: 1 }}>
        <Heading
          fontFamily={"inherit"}
          size="2xl"
          pt={{ base: "0rem", xl: "4rem" }}
          textAlign={"center"}
          pl={"2rem"}
          display={"inline-block"}
        >
          Global Odyssey
          <div className="underline"></div>
        </Heading>
        <Text p="1rem" pt={"2rem"} textAlign={"justify"}>
          Haven't we all thought of travelling across the world and explore new
          cities, lifestyle of the people there and their cultures? Ever since
          the pandemic we have all been majorly within the four walls of our
          houses.
          <br />
          <br />
          Well, it's time to change this and explore different cultures across
          the globe. This OCULUS we're all set to experience GLOBAL ODYSSEY and
          let it add some vibrant colours to our not so vibrant monotonous
          lifestyle.
        </Text>
        {/* <Box pt="4rem">
          <div className="footer-logo">
            <img src={Download} alt="" />
          </div>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default ThemePage;
