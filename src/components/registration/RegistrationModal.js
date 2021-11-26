import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import "../../styles/RegistrationModal.scss";

// Assets
import Oc from "../../assets/tech.png";
import Payment from "../../assets/done.jpg";
import { Heading } from "@chakra-ui/react";
// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { eventService } from "../../services/eventService";

import { Input } from "@chakra-ui/input";
import { Form, Button } from "react-bootstrap";

import { useClipboard } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AppContext";
import TeamModal from "./ModalContent/TeamModal";
import PaymentSuccessful from "./ModalContent/PaymentSuccessful";
import SinglePlayer from "./ModalContent/SinglePlayer";
import MultiplePlayers from "./ModalContent/MultiplePlayers";
import ShowJoinTeamDetails from "./ModalContent/ShowJoinTeamDetails";
import ShowPaymentDetails from "./ModalContent/ShowPaymentDetails";

const RegistrationModal = ({
  userTeam,
  viewTeam,
  setViewTeam,
  setIsOpen,
  eventData,
  paymentDone,
  setPaymentDone,
  currentUser,
  setJoin,
}) => {
  // const [isMobile, setIsMobile] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [payTypeOpen, setPayTypeOpen] = useState(false);
  const [joinTypeOpen, setJoinTypeOpen] = useState(false);

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  console.log("The type is: ", eventData, viewTeam);
  useEffect(() => {
    if (viewTeam) {
      setIsRegistered(true);
    }
  }, []);

  // Whenever user logs in through a different account set the payment model as false
  useEffect(() => {
    setIsPaymentSuccess(false);
  }, [currentUser]);

  console.log("Pay type: ", payTypeOpen);
  const { isOpen, onOpen, onClose, setModalContent } = useAuth();
  return (
    <div>
      <Modal
        onClose={() => {
          if (paymentDone) {
            setViewTeam(true);
          }

          setPayTypeOpen(false);
          setJoinTypeOpen(false);
          onClose();
        }}
        isOpen={isOpen}
        scrollBehavior="inside"
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent h={"50vh"} p={0} m={0} w={"95%"}>
          <ModalCloseButton />
          <ModalBody p={0} m={0}>
            {viewTeam ? (
              <TeamModal userTeam={userTeam} />
            ) : isPaymentSuccess ? (
              <PaymentSuccessful
                eventData={eventData}
                setViewTeam={setViewTeam}
              />
            ) : eventData.isSingle ? (
              <SinglePlayer
                setPaymentDone={setPaymentDone}
                setIsPaymentSuccess={setIsPaymentSuccess}
                eventData={eventData}
                currentUser={currentUser}
              />
            ) : !payTypeOpen ? (
              <MultiplePlayers
                setPayTypeOpen={setPayTypeOpen}
                eventData={eventData}
                currentUser={currentUser}
                setJoin={setJoin}
                setIsOpen={setIsOpen}
                setJoinTypeOpen={setJoinTypeOpen}
              />
            ) : joinTypeOpen ? (
              <ShowJoinTeamDetails
                eventData={eventData}
                currentUser={currentUser}
                setJoin={setJoin}
                setIsOpen={setIsOpen}
              />
            ) : (
              <ShowPaymentDetails
                details={eventData.Fee}
                eventName={eventData.Title}
                setPaymentDone={setPaymentDone}
                setIsPaymentSuccess={setIsPaymentSuccess}
                currentUser={currentUser}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          // if(!isRegistered)
          if (paymentDone) {
            setViewTeam(true);
          }

          setPayTypeOpen(false);
          setJoinTypeOpen(false);
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="cross-child"
          onClick={() => {
            if (paymentDone) {
              setViewTeam(true);
            }
            setPayTypeOpen(false);
            setJoinTypeOpen(false);
            setIsOpen(false);
          }}
        >
          <PhoneIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>

        
      </Modal> */}
    </div>
  );
};

export default RegistrationModal;
