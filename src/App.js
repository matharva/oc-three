import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./styles.scss";

import Main from "./components/Main";
import EventDetails from "./components/EventDetails";
import Eventpage from "./components/Eventpage";

const eventDetails = [
  {
    name: "Codatron++",
    coverImg: "",
    category: "Technical",
    date: "13/14 Mar",
    prizes: "Rs. 10000",
    registration: "100",
    description:
      "A traditional coding contest with problem statements covering various concepts of competitive programming in two rounds with elimination in the first round. Winners of Codatron++ Round 1, OCL: Search For Skywalker and OCL: Code Wars compete in this final round",
    path: "codatron",
  },
];

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/events/:eventName">
            <Eventpage event={eventDetails[0]} />
          </Route>
          <Route path="/events">
            <EventDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
