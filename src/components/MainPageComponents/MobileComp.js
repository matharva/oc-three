import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

// Assets
import Download from "../../assets/android-download.png";
import Mob from "../../assets/test.png";

const MobileComp = () => {
  return (
    <Flex h={"100%"} direction={{ base: "column", xl: "row" }}>
      <Box flex={"0.5"}>
        <Box boxSize="sm" height={"100%"} w={"100%"}>
          <Image
            src={Mob}
            alt="oc_mob"
            height={{ xl: "100%", base: "50%" }}
            objectFit={"cover"}
            margin={"0 auto"}
          />
        </Box>
      </Box>
      <Box flex={"0.5"}>
        <Heading size="2xl" pt={"4rem"}>
          About our mobile app
        </Heading>
        <Text pt={"2rem"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas
          quos amet facere hic labore voluptatem recusandae nihil quae magnam
          ullam fuga, nemo mollitia excepturi laudantium quisquam iure laborum.
        </Text>
        <Box pt="4rem">
          <div className="footer-logo">
            <img src={Download} alt="" />
          </div>
        </Box>
      </Box>
    </Flex>
  );
};

export default MobileComp;
