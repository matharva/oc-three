import { List, ListIcon, ListItem, Box } from "@chakra-ui/layout";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Rules = ({ rules }) => {
  return (
    <>
      <List spacing={3}>
        {rules.map((rule) => {
          return (
            <ListItem key={rule.id}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {rule.text}
            </ListItem>
          );
        })}

        <Box padding={2}></Box>
      </List>
    </>
  );
};

export default Rules;
