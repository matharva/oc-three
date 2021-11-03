import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
import { useAuth } from "../contexts/AppContext";

// Styles
import "../styles/Eventpage.scss";

// Assests
import CodeWars from "../assets/Codewars.jpg";
import IPL from "../assets/IPL.jpg";
import VSM from "../assets/VSM.jpg";
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
import { eventService } from "../services/eventService";
const Description = ({ event }) => {
  return (
    <>
      {event.Description.length > 200 ? (
        <ShowMoreText lines={6}>{event.Description}</ShowMoreText>
      ) : (
        event.Description
      )}
      <div className="section-1">
        <div className="event-type">
          <div className="event-img-container">
            <img src={Technical} alt="" />
          </div>
          <div className="event-text">{'Techincal'}</div>
        </div>
        <div className="event-date">
          <div className="event-img-container">
            <img src={Cal} alt="" />
          </div>
          <div className="event-text">{event.Date}</div>
        </div>
        <div className="event-prize">
          <div className="event-img-container">
            <img src={Prize} alt="" />
          </div>
          <div className="event-text">{event.isSingle?event.Fee.Single:event.Fee.Team}</div>
        </div>
      </div>
    </>
  );
};

const Rules = ({rules})=>{
  console.log('Rules: ',rules);
  return (
    <>
      {/* {rules.map(i=>{
        // console.log('The rule is: ',rule);
        
          `${i})`<br/>
        
      })} */}
      {
        rules.map((rule,i)=>{
          return(
            <>
            {i+1}) {rule}
            <br/>
            </>
          )
        })
      }
    </>
  )
}

const map = {
  ipl:{
    Title: 'IPL Auction',
    image:IPL
  },
  vsm:{
    Title: 'Virtual Stock Market',
    image:VSM
  }
}

const EventDetails = ({ event }) => {
  const { jello } = useAuth();
  // console.log(jello);
  const {eventName} = useParams();
  const history = useHistory();
  console.log(eventName);
  const [tabState, setTabState] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [eventData,setEventData] = useState(null);

  function tabsContent() {
    console.log(tabState);
    if (tabState === 0) return <Description event={eventData} />;
    if (tabState === 1) return <Rules rules = {eventData.rules}/>;
    if (tabState === 2) return <FaqSection faq={eventData.faq} />;
  }

  useEffect(async()=>{
    
    let event = await eventService.getEvent(map[eventName].Title);
    console.log('The eventData is: ',event);
    setEventData(event);
  },[])

  return (
    <>
    {
      eventData?
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
                <div className="event-title">{eventData.Title}</div>
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
                <div className="event-content">{tabsContent(eventData)}</div>
              </div>
              <div className="event-register">
                <div className="reg-amt">
                  <span>Registration: </span>
                  <div className="reg-text">
                    <span>Rs:</span>
                    {eventData.isSingle?eventData.Fee.Single:eventData.Fee.Team}
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
              <img src={map[eventName].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
      :""
    }
    </>
  );
};

export default EventDetails;
