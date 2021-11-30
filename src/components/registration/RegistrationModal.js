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

  const { isOpen, onOpen, onClose, setModalContent } = useAuth();

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
                  setIsOpen={setIsOpen}
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
      scrollBehavior="inside"
      isCentered
      size="xl"
    >
      <ModalOverlay />
      <ModalContent h="500px" w={"95%"}>
        <ModalCloseButton />
        <ModalBody p={0} m={0}>
          {renderComponent()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationModal;

// eslint-disable-next-line no-lone-blocks
{
  /* {viewTeam ? (
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
          )} */
}
