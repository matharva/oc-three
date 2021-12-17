import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Heading,
  TableCaption,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
const TeamModal = ({ userTeam }) => {
  console.log("The user team is: ", userTeam);
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Heading textAlign="center" size="xl" color="white" m="3">
          Team Details
        </Heading>
        <Flex
          flexDirection={"row"}
          mt="5"
          m="2"
          color="white"
          alignItems="baseline"
          justifyContent="space-evenly"
          w={"100%"}
        >
          <Flex
            flexDirection={"column"}
            mt="5"
            m="2"
            color="white"
            alignItems="baseline"
            justifyContent="center"
          >
            <p size="sm" mr={"1rem"}>
              Team Code:{" "}
            </p>
            <Heading textAlign="center" size="md">
              <span onClick={onCopy}>{userTeam?.TeamCode || "team Code"}</span>
            </Heading>
          </Flex>

          <Flex
            flexDirection={"column"}
            mt="5"
            m="2"
            color="white"
            alignItems="baseline"
            justifyContent="center"
          >
            <p size="sm" mr={"1rem"}>
              Team Name:
            </p>

            <Heading size="md" textAlign="center" color="white">
              {userTeam?.TeamName || userTeam?.teamName}
            </Heading>
          </Flex>
        </Flex>

        <Table variant="striped" colorScheme="teal" size={"lg"} color="white">
          <Thead>
            <Tr>
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userTeam?.member.map((item, i) => {
              return (
                <>
                  {i % 2 == 0 ? (
                    <Tr color="black" fontStyle="italic" fontWeight="600">
                      <Td textAlign="center">{item.name}</Td>
                      <Td textAlign="center">{item.email}</Td>
                    </Tr>
                  ) : (
                    <Tr fontStyle="italic" fontWeight="600">
                      <Td textAlign="center">{item.name}</Td>
                      <Td textAlign="center">{item.email}</Td>
                    </Tr>
                  )}
                </>
              );
            })}
          </Tbody>
        </Table>
        <Spacer />
        {/* <div style={{ paddingTop: "5%" }}></div> */}
        <Button
          leftIcon={<FaWhatsapp />}
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            window.location.href = "http://localhost:3001";
          }}
          margin="1rem 0"
        >
          Join
        </Button>
      </Flex>
    </>
  );
};

export default TeamModal;
