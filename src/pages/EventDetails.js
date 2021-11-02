import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
import { useAuth } from "../contexts/AppContext";

// Styles
import "../styles/Eventpage.scss";

// Assests
import CodeWars from "../assets/Codewars.jpg";
import Technical from "../assets/tech.png";
import Cal from "../assets/calendar.jpg";
import Prize from "../assets/prize.jpg";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import FaqSection from "../components/FaqSection";
import RegistrationModal from "../components/RegistrationModal";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
const Description = ({ event }) => {
  return (
    <>
      {event.description.length > 200 ? (
        <ShowMoreText lines={6}>{event.description}</ShowMoreText>
      ) : (
        event.description
      )}
      <div className="section-1">
        <div className="event-type">
          <div className="event-img-container">
            <img src={Technical} alt="" />
          </div>
          <div className="event-text">{event.category}</div>
        </div>
        <div className="event-date">
          <div className="event-img-container">
            <img src={Cal} alt="" />
          </div>
          <div className="event-text">{event.date}</div>
        </div>
        <div className="event-prize">
          <div className="event-img-container">
            <img src={Prize} alt="" />
          </div>
          <div className="event-text">{event.prizes}</div>
        </div>
      </div>
    </>
  );
};

const EventDetails = ({ event }) => {
  const { jello } = useAuth();
  console.log(jello);
  const history = useHistory();
  console.log(event);
  const [tabState, setTabState] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function tabsContent() {
    console.log(tabState);
    if (tabState === 0) return <Description event={event} />;
    if (tabState === 1) return event.rules;
    if (tabState === 2) return <FaqSection faq={event.faq} />;
  }

  return (
    <>
      <DesktopNav />
      <div className="event-container">
        <MobileNav />
        <div className="event-grid">
          <div className="back-container" onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </div>
          <div className="left-grid">
            <div className="event-details-grid">
              <div className="event-title-container">
                <div className="event-title">Codatron++</div>
                {/* <div className="event-subtitle">Technical</div> */}
                {/* <div className="event-interested">
                <ArrowBackIcon />
              </div> */}
              </div>
              <div className="event-description">
                <div className="event-tabs">
                  <div
                    className={`event-tab-item ${
                      tabState === 0 ? "active" : ""
                    }`}
                    onClick={() => setTabState(0)}
                  >
                    Description
                  </div>
                  <div
                    className={`event-tab-item ${
                      tabState === 1 ? "active" : ""
                    }`}
                    onClick={() => setTabState(1)}
                  >
                    Rules
                  </div>
                  <div
                    className={`event-tab-item ${
                      tabState === 2 ? "active" : ""
                    }`}
                    onClick={() => setTabState(2)}
                  >
                    FAQ
                  </div>
                </div>
                <div className="event-content">{tabsContent(event)}</div>
              </div>
              <div className="event-register">
                <div className="reg-amt">
                  <span>Registration: </span>
                  <div className="reg-text">
                    <span>Rs:</span>
                    {event.registration}
                  </div>
                </div>
                <div className="reg-btn-container">
                  <button className="reg-btn" onClick={() => setIsOpen(true)}>
                    Register
                  </button>
                </div>
              </div>
            </div>
            <RegistrationModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="right-grid">
            <div className="img-container">
              <img src={CodeWars} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
