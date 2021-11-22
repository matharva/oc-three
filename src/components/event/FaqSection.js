import React from "react";

// External Components
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

// Styles
import "react-accessible-accordion/dist/fancy-example.css";

const FaqSection = ({ faq }) => {
  return (
    <Accordion allowToggle>
      {faq.map((item) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton onSelect={() => {}} style={{ padding: "1rem" }}>
                <Box flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqSection;
