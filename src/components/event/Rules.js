import { List, ListIcon, ListItem } from "@chakra-ui/layout";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Rules = ({ rules }) => {
  return (
    <>
      <List spacing={3}>
        {rules.map((rule, i) => {
          return (
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {rule}
            </ListItem>
          );
        })}
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
    </>
  );
};

export default Rules;
