import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import LoginContainer from "./LoginContainer";
import { useAuth } from "../../../contexts/AppContext";
import { OC_BG_DARK } from "../../../services/helpers";
const LoginModal = () => {
  const { isLoginModalOpen, onLoginModalOpen, onLoginModalClose } = useAuth();
  return (
    <Modal
      onClose={onLoginModalClose}
      isOpen={isLoginModalOpen}
      scrollBehavior="inside"
      isCentered
      size="xl"
      bg={"white"}
    >
      <ModalOverlay />
      <ModalContent h="500px" w={"95%"} rounded={true}>
        <ModalCloseButton color={"white"} />
        <ModalBody p={0} m={0} bg={OC_BG_DARK}>
          <LoginContainer />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
