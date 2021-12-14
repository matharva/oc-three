import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import "../../styles/RegistrationModal.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
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
import LoginContainer from "./Login/LoginContainer";
import { OC_BG, OC_BG_DARK } from "../../services/helpers";

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
  const [isRegistered, setIsRegistered] = useState(false);
  const [payTypeOpen, setPayTypeOpen] = useState(false);
  const [joinTypeOpen, setJoinTypeOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useAuth();

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

  function handleClose() {
    if (paymentDone) {
      setViewTeam(true);
    }
    setPayTypeOpen(false);
    setJoinTypeOpen(false);
    onClose();
  }

  function renderComponent() {
    if (!currentUser) return <LoginContainer />;

    if (viewTeam && !eventData.isSingle) {
      return <TeamModal userTeam={userTeam} />;
    } else {
      if (isPaymentSuccess) {
        return (
          <PaymentSuccessful eventData={eventData} setViewTeam={setViewTeam} />
        );
      } else {
        if (eventData.isSingle) {
          return (
            <SinglePlayer
              setPaymentDone={setPaymentDone}
              setIsPaymentSuccess={setIsPaymentSuccess}
              eventData={eventData}
              currentUser={currentUser}
              handleClose={handleClose}
              onOpen={onOpen}
            />
          );
        } else {
          if (!payTypeOpen) {
            return (
              <MultiplePlayers
                setPayTypeOpen={setPayTypeOpen}
                eventData={eventData}
                currentUser={currentUser}
                setJoin={setJoin}
                setIsOpen={setIsOpen}
                setJoinTypeOpen={setJoinTypeOpen}
              />
            );
          } else {
            if (joinTypeOpen) {
              return (
                <ShowJoinTeamDetails
                  eventData={eventData}
                  currentUser={currentUser}
                  setJoin={setJoin}
                  // onOpen={onOpen}
                  handleClose={handleClose}
                />
              );
            } else {
              return (
                <ShowPaymentDetails
                  details={eventData.Fee}
                  eventName={eventData.Title}
                  setPaymentDone={setPaymentDone}
                  setIsPaymentSuccess={setIsPaymentSuccess}
                  currentUser={currentUser}
                  handleClose={handleClose}
                />
              );
            }
          }
        }
      }
    }
  }

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      // scrollBehavior="inside"
      isCentered
      size="xl"
    >
      <ModalOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} />
      <ModalContent h="500px" w={"95%"}>
        <ModalCloseButton color={"white"} />
        <ModalBody
          p={0}
          m={0}
          bg={OC_BG_DARK}
          // style={{
          //   // border: "2px solid red",
          //   backdropFilter: "blur(16px) saturate(180%)",
          //   backgroundColor: "rgba(17, 25, 40, 0.75)",
          //   borderRadius: "12px",
          //   border: "1px solid rgba(255, 255, 255, 0.125)",
          // }}
        >
          {renderComponent()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationModal;
