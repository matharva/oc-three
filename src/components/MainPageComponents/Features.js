import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack direction={["row", "column"]}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Box>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Box>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={"4rem"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"1. Download Oculus app"}
          text={"1. Download Oculus app"}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"2. Go to the event you want to participate"}
          text={"2. Go to the event you want to participate"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"3. Register for the event"}
          text={"3. Register for the event"}
        />
        {/* <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        /> */}
      </SimpleGrid>
    </Box>
  );
}
