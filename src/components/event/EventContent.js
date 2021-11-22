import { Container } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import Description from "./Description";
import FaqSection from "./FaqSection";
import Rules from "./Rules";

const EventContent = ({ eventData }) => {
  return (
    <Container maxW="container.xl">
      <Tabs isFitted variant="enclosed" colorScheme="green">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Rules</Tab>
          <Tab>FaqSection</Tab>
        </TabList>
        <TabPanels>
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
