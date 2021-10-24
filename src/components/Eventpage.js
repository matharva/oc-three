import React from "react";
import { useHistory, useRouteMatch } from "react-router";

// Styles
import "../styles/Eventpage.scss";

// Assests
import CodeWars from "../assets/Codewars.jpg";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
            <div className="event-type">{event.category}</div>
            <div className="event-date">{event.date}</div>
          </div>
          <div className="section-1">
            <div className="event-prize">{event.prizes}</div>
            <div className="event-registration">{event.registration}</div>
          </div>
          <div className="register-btn">REGISTER</div>
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
