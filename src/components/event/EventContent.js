import { Container } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import Description from "./Description";
import FaqSection from "./FaqSection";
import Rules from "./Rules";

// Styles
import "../../styles/Eventpage.scss";

const EventContent = ({ eventData }) => {
  return (
    <Container
      maxW="container.md"
      maxH="100%"
      className="event-box"
      minH={"50vh"}
    >
      <Tabs isFitted variant="enclosed" colorScheme="green">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Rules</Tab>
          <Tab>FAQ</Tab>
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
