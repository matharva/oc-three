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
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
const TeamModal = ({ userTeam }) => {
  console.log("The user team is: ", userTeam);
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    // <div className="team-modal">
    //   <h1>Team Code:{userTeam.TeamCode}</h1>
    //   <div className="team-members">
    //     {/* <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Atharva Mohite</div>
    //         <div className="team-member-item-email">
    //           atharvamohite20@gmail.com
    //         </div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div> */}
    //     {userTeam.member.map((item) => {
    //       return (
    //         <>
    //           <div className="team-member-items">
    //             <div className="team-member-item-img-container">
    //               <img src={Oc} alt="" />
    //             </div>
    //             <div className="items-info">
    //               <div className="team-member-item-name">{item.name}</div>
    //               <div className="team-member-item-email">{item.email}</div>
    //             </div>
    //           </div>

    //           {/* <div className="items-info">
    //             <div className="team-member-item-name">{item.name}</div>
    //             <div className="team-member-item-email">{item.email}</div>
    //           </div> */}
    //         </>
    //       );
    //     })}
    //   </div>
    //   <button>
    //     <PhoneIcon style={{ color: "white" }} />
    //     Join on WhatsApp
    //   </button>
    // </div>
    <>
      <Heading textAlign="center" mt="5" mb="10">
        Team Code: <span onClick={onCopy}>{userTeam.TeamCode}</span>
      </Heading>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userTeam.member.map((item) => {
            return (
              <>
                {/* <div className="team-member-items">
                <div className="team-member-item-img-container">
                  <img src={Oc} alt="" />
                </div>
                <div className="items-info">
                  <div className="team-member-item-name">{item.name}</div>
                  <div className="team-member-item-email">{item.email}</div>
                </div>
              </div> */}
                <Tr>
                  <Td>Blah</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                </Tr>

                {/* <div className="items-info">
                <div className="team-member-item-name">{item.name}</div>
                <div className="team-member-item-email">{item.email}</div>
              </div> */}
              </>
            );
          })}
          {/* <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr> */}
        </Tbody>
        {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
      </Table>
    </>
  );
};

export default TeamModal;
