import React from "react";
import { useHistory, useRouteMatch } from "react-router";

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
import RegisterBtn from "./RegisterBtn";

const Eventpage = ({ event }) => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  console.log(event);
  return (
    <div className="event-container">
      <div className="event-grid">
        <div className="back-container" onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </div>
        <div className="left-grid">
          <div className="event-header">{event.name}</div>
          <div className="event-desc">{event.description}</div>
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
          <div className="section-1">
            <div className="event-registration">
              Registration:
              <div className="reg-text">
                <span>Rs:</span>
                {event.registration}
              </div>
            </div>
            <div className="register-btn">Register</div>
            {/* <RegisterBtn /> */}
          </div>
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

export default Eventpage;
