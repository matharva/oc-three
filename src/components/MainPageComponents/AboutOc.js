import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

// Assets
import Download from "../../assets/android-download.png";
import Mob from "../../assets/test.png";

const AboutOc = () => {
  return (
    <Flex h={"100%"} direction={{ base: "column", xl: "row" }}>
      <Box flex={{ xl: "0.5", base: "0.3" }}>
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
      <Box flex={{ xl: "0.5", base: "0.7" }}>
        <Heading
          size="2xl"
          pt={{ base: "0rem", xl: "4rem" }}
          textAlign={"center"}
        >
          About Us
        </Heading>
        <Text p="1rem" pt={"2rem"} textAlign={"justify"}>
          Sardar Patel Institute of Technology is back with its' 4th edition of
          their annual Techno-Cultural Fest Oculus. In this phenomenal fest we
          have a plethora of events for you to enjoy, show your talent, build on
          your skills and much more! From singing and dancing in Sargam and
          Aelan-e-jung to debating at SPIT MUN or Coding at Oculus Coding League
          or designing circuits in Short Circuit or Trading in VSM or bidding
          for your favourite players at the IPL Auction or even gaming with your
          friends in E Sports or looking for clues in TechRace or enjoying the
          Pronites we guarantee fun at each event and each step! Unlike other
          college fests Oculus is aiming to make a significant difference in
          society by helping those who are less fortunate than us by donating
          the proceeds from all the events to support CRY, an esteemed NGO and
          its' Yellow Fellow campaign.
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

export default AboutOc;
