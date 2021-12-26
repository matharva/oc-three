import React from "react";
import ShowMoreText from "react-show-more-text";

// Assets
import tech from "../../assets/tech.jpg";
import fun from "../../assets/fun.jpeg";
import pre from "../../assets/pre-events.jpeg";
import cult from "../../assets/cultural.jpeg";

import Cal from "../../assets/members.jpeg";
import Prize from "../../assets/prize.jpeg";

function renderImage(type) {
  if (type === "Technical") return tech;
  if (type === "Fun") return fun;
  if (type === "Pre-events") return pre;
  if (type === "Cultural") return cult;
}
function renderMembers(mem) {
  if (mem == 1) return "Solo";
  else return `Team`;
}

function onlyNumbers(text) {
  let num = text.replace(/\D/g, "");
  console.log(num, "dhdhdhd");
  return parseInt(num);
}

const Description = ({ event }) => {
  // console.log("hshshsh: ", onlyNumbers(event.Prizes));
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
            <img src={renderImage(event.Category)} alt="" />
          </div>
          <div className="event-text">{event.Category}</div>
        </div>
        <div className="event-date">
          <div className="event-img-container">
            <img src={Cal} alt="" />
          </div>
          <div className="event-text">{renderMembers(event.max)}</div>
        </div>
        <div className="event-prize">
          <div className="event-img-container">
            <img src={Prize} alt="" />
          </div>
          <div className="event-text">
            {onlyNumbers(event.Prizes) ? event.Prizes : "Coming soon"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
