import React from "react";

// External Components
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Styles
import "react-accessible-accordion/dist/fancy-example.css";

const FaqSection = ({ faq }) => {
  return (
    <Accordion>
      {faq.map((item) => {
        return (
          <AccordionItem style={{}}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{item.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqSection;
