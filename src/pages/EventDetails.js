import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import Modal from "react-modal";
import { useAuth } from "../contexts/AppContext";

// Styles
import "../styles/Eventpage.scss";

import RegistrationModal from "../components/registration/RegistrationModal";
import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";

//Data and Services
import { eventService } from "../services/eventService";

import { Icon } from "@chakra-ui/react";

import { IoMdArrowRoundBack } from "react-icons/io";

import EventContent from "../components/event/EventContent";
import { EVENT_DATA } from "../services/helpers";

// Here viewTeam basically means has the user Registered for the event(does it have any document in RegisterTeam collection)

const EventDetails = ({ event }) => {
  const { jello, currentUser, onOpen } = useAuth();
  console.log("Login: ", jello, currentUser);
  const { eventName } = useParams();
  const history = useHistory();

  const [eventData, setEventData] = useState(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [viewTeam, setViewTeam] = useState(false);
  const [userTeam, setUserTeam] = useState(null);
  const [join, setJoin] = useState(null);
  const [load, setLoad] = useState(false);
  // const {} = useAuth()

  const currentEvent = EVENT_DATA.filter((x) => x.path === eventName)[0];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let event = await eventService.getEvent(currentEvent.name);
    console.log("Heyyyyy in useEffect first wala: ", viewTeam, userTeam);
    setViewTeam(false);
    setUserTeam(null);
    setPaymentDone(false);
    if (currentUser) {
      console.log("Heyyyyy user exists: ", currentUser.uid, eventName);
      let userRegistrationDetails =
        await eventService.getUserRegistrationDetails({
          eventName: currentEvent.name,
          userId: currentUser.uid,
        });
      console.log("The eventData is: ", event, userRegistrationDetails);
      if (userRegistrationDetails && userRegistrationDetails.teamDetails) {
        setViewTeam(true);
        setUserTeam(userRegistrationDetails.teamDetails);
      } else {
        setPaymentDone(false);
        setViewTeam(false);
        setUserTeam(null);
      }
      setLoad(true);
    } else {
      setPaymentDone(false);
      setLoad(true);
    }
    console.log("Event data: ", event);
    setEventData(event);
  }, [currentUser]);

  console.log("The load is: ", load);
  // Here update all the states that needs to changed once the payment process is done(Not when the user is there in a team only when the user has paid for the event )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    console.log("Payment hogaya page reset maaro");
    if (currentUser) {
      let userRegistrationDetails =
        await eventService.getUserRegistrationDetails({
          eventName: currentEvent.name,
          userId: currentUser.uid,
        });
      console.log("The User registration details are", userRegistrationDetails);

      if (userRegistrationDetails && userRegistrationDetails.teamDetails) {
        setUserTeam(userRegistrationDetails.teamDetails);
      }
    }
  }, [paymentDone]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    console.log("Payment hogaya page reset maaro");
    if (currentUser) {
      let userRegistrationDetails =
        await eventService.getUserRegistrationDetails({
          eventName: currentEvent.name,
          userId: currentUser.uid,
        });
      console.log("The eventData is: ", event, userRegistrationDetails);

      if (userRegistrationDetails && userRegistrationDetails.teamDetails) {
        setViewTeam(true);
        setUserTeam(userRegistrationDetails.teamDetails);
      }
    }
  }, [currentUser, event, eventName, join]);

  const addEvent = async () => {
    let eventAdded = await eventService.addEvent();
    console.log("The event added is: ", eventAdded);
  };

  // Here check if user isLogged in or not, if not then let the user login and then render states(Show modal if and only is the event registerd by the user is a teamEvent)
  const registerEvent = () => {
    console.log("Dard");
    if (
      load &&
      currentUser &&
      currentUser.email &&
      ((viewTeam && !eventData.isSingle) || !viewTeam)
    ) {
      console.log("Dard 1");
      //Idhar kuch toh (paymentDone and !viewTeam) dalna tha mai bhool gaya exactly kya tha
      // setIsOpen(true);
      onOpen();
    } else if (!currentUser) {
      console.log("Dard 2");
      // setIsLoginOpen(true);
      onOpen();
    }
  };

  return (
    <>
      {eventData ? (
        <>
          {/* {!currentUser && (
            <LoginContainer isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
          )} */}
          <DesktopNav />
          <div className="event-container">
            <MobileNav />
            <div className="event-grid">
              <div className="back-container" onClick={() => history.goBack()}>
                <Icon as={IoMdArrowRoundBack} w={6} h={6} />
              </div>
              <div className="left-grid">
                <div className="event-details-grid">
                  <div className="event-title-container">
                    <div className="event-title">{eventData.Title}</div>
                  </div>
                  <EventContent eventData={eventData} />
                  {eventData.isSingle ? (
                    <div className="event-register">
                      <div className="reg-amt">
                        <span>Registration: </span>
                        <div className="reg-text">
                          <span>Rs:</span>
                          {eventData.isSingle ? eventData.Fee[0].Fee : ""}
                        </div>
                      </div>
                      <div className="reg-btn-container">
                        <button
                          className="reg-btn"
                          onClick={() => {
                            registerEvent();
                          }}
                        >
                          {currentUser
                            ? (currentUser && paymentDone) || viewTeam
                              ? eventData.isSingle
                                ? "Registered"
                                : "View Team"
                              : "Register"
                            : "Register"}
                        </button>
                        {/* <Button colorScheme="teal">Button</Button> */}
                      </div>
                    </div>
                  ) : (
                    <div className="event-register-single">
                      <div className="reg-btn-container">
                        <button
                          className="reg-btn"
                          onClick={() => {
                            registerEvent();
                            // onOpen();
                          }}
                          disabled={!load}
                        >
                          {currentUser
                            ? (currentUser && paymentDone) || viewTeam
                              ? eventData.isSingle
                                ? "Registered"
                                : "View Team"
                              : "Register"
                            : "Register"}
                        </button>
                      </div>
                      {/* <Button
                        size="lg"
                        style={{
                          background:
                            "linear-gradient(to right, #ff4b2b, #ff416c)",
                          color: "white",
                          fontWeight: "normal",
                        }}
                      >
                        Button
                      </Button> */}
                    </div>
                  )}
                </div>
                <RegistrationModal
                  userTeam={userTeam}
                  viewTeam={viewTeam}
                  setViewTeam={setViewTeam}
                  eventData={eventData}
                  paymentDone={paymentDone}
                  setPaymentDone={setPaymentDone}
                  currentUser={currentUser}
                  setJoin={setJoin}
                />
              </div>
              <div className="right-grid">
                <div className="img-container">
                  <img src={eventData.BgImg || currentEvent.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EventDetails;
