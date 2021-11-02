import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";

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

const EventDetails = ({ event }) => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  console.log(event);
  const [tabState, setTabState] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function tabsContent() {
    console.log(tabState);
    if (tabState === 0) return event.description;
    if (tabState === 1) return event.rules;
    if (tabState === 2) return <FaqSection faq={event.faq} />;
  }

  return (
    <div className="event-container">
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
                  className={`event-tab-item ${tabState === 0 ? "active" : ""}`}
                  onClick={() => setTabState(0)}
                >
                  Description
                </div>
                <div
                  className={`event-tab-item ${tabState === 1 ? "active" : ""}`}
                  onClick={() => setTabState(1)}
                >
                  Rules
                </div>
                <div
                  className={`event-tab-item ${tabState === 2 ? "active" : ""}`}
                  onClick={() => setTabState(2)}
                >
                  FAQ
                </div>
              </div>
              {console.log(tabsContent())}
              <div className="event-content">
                {/* <ShowMoreText lines={6}>{tabsContent()}</ShowMoreText> */}
                {tabsContent()}
              </div>
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
  );
};

export default EventDetails;
