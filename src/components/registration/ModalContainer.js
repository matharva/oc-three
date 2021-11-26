// import React from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
// } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { useAuth } from "../../contexts/AppContext";

// // import LoginContainer from "../registration/LoginContainer";
// const ModalContainer = ({ modalContent = "Hwello" }) => {
//   const { isOpen, onOpen, onClose } = useAuth();
//   // const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       isCentered
//       motionPreset="slideInBottom"
//       scrollBehavior="inside"
//     >
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Modal Title</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>{modalContent}</ModalBody>

//         <ModalFooter>
//           <Button colorScheme="blue" mr={3} onClick={onClose}>
//             Close
//           </Button>
//           {/* <Button variant="ghost">Secondary Action</Button> */}
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ModalContainer;
