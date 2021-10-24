import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

// Styles
import "../styles/EventDetails.scss";

const EventDetails = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  console.log(url, path);
  return (
    <div className="main-container">
      <div className="">All Events</div>
      <Link to="/">back </Link>
      <Link to={`${url}/codatron`}>Link to codatron here</Link>
    </div>
  );
};

export default EventDetails;
