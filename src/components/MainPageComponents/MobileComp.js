import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

// Assets
import Download from "../../assets/android-download.png";
import Mob from "../../assets/test.png";

const MobileComp = () => {
  return (
    <Flex h={"100%"} direction={{ base: "column", xl: "row" }}>
      <Box flex={{ xl: "0.5", base: "0.3" }}>
        <Box boxSize="sm" height={"100%"} w={"100%"} p={10}>
          <Image
            src={Mob}
            alt="oc_mob"
            height={{ xl: "100%", base: "50%" }}
            objectFit={"cover"}
            margin={"0 auto"}
          />
        </Box>
      </Box>
      <Box flex={{ xl: "0.5", base: "0.7" }} textAlign={"center"}>
        <Heading
          size="2xl"
          p="1rem"
          pt={{ base: "0rem", xl: "4rem" }}
          textAlign={"center"}
        >
          About our mobile app
        </Heading>
        <Text pt={"2rem"} textAlign={"justify"} p="4">
          Download our Oculus App Head on to playstore and download our own
          Oculus App To get in touch with all the updates regarding the fest,
          timings and ask any queries of the event via chat system.
        </Text>
        <Box pt={{ xl: "4rem", base: "1rem" }} margin={"0 auto"}>
          <div className="footer-logo" style={{ margin: "0 auto" }}>
            <img src={Download} alt="" />
          </div>
        </Box>
      </Box>
    </Flex>
  );
};

export default MobileComp;
