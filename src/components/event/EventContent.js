import { Container } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import Description from "./Description";
import FaqSection from "./FaqSection";
import Rules from "./Rules";

const mobile = {
  height: "50vh",
  overflow: "auto",
};

const EventContent = ({ eventData }) => {
  return (
    <Container maxW="container.xl" maxH="100%">
      <Tabs isFitted variant="enclosed" colorScheme="green">
        <TabList>
          <Tab py="2">Description</Tab>
          <Tab>Rules</Tab>
          <Tab>FAQ</Tab>
        </TabList>
        <TabPanels height={"50vh"} overflow={{ base: "none", lg: "auto" }}>
          <TabPanel>
            <Description event={eventData} />
          </TabPanel>
          <TabPanel>
            <Rules rules={eventData.rules} />
          </TabPanel>
          <TabPanel>
            <FaqSection faq={eventData.faq} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default EventContent;
