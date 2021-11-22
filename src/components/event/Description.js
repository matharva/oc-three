import React from "react";
import ShowMoreText from "react-show-more-text";

// Assets
import Technical from "../../assets/tech.png";
import Cal from "../../assets/calendar.jpg";
import Prize from "../../assets/prize.jpg";

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
          <div className="event-text">{"Techincal"}</div>
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
          <div className="event-text">{event.Prizes}</div>
        </div>
      </div>
    </>
  );
};

export default Description;
