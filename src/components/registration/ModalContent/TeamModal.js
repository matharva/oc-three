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
    <>
      <Heading textAlign="center" mt="5" mb="10">
        Team Code:{" "}
        <span onClick={onCopy}>{userTeam?.TeamCode || "team Code"}</span>
      </Heading>
      <Heading size="md" textAlign="center" pb="5">
        Team Members : {userTeam?.TeamName}
      </Heading>
      <Table variant="striped" colorScheme="orange" size={"lg"}>
        {/* <TableCaption placement="top" pb="5"> */}
        {/* </TableCaption> */}
        <Thead>
          <Tr>
            <Th textAlign="center">Name</Th>
            <Th textAlign="center">Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userTeam?.member.map((item) => {
            return (
              <Tr>
                <Td textAlign="center">{item.name}</Td>
                <Td textAlign="center">{item.email}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default TeamModal;

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
