import { List, ListIcon, ListItem, Box } from "@chakra-ui/layout";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { OC_GRADIENT } from "../../services/helpers";

const Rules = ({ rules }) => {
  return (
    <>
      <List spacing={3}>
        {rules.map((rule) => {
          return (
            <ListItem key={rule.id}>
              <ListIcon as={MdCheckCircle} color={"green.400"} />
              {rule.text}
            </ListItem>
          );
        })}

        <Box padding={5}></Box>
      </List>
    </>
  );
};

export default Rules;
