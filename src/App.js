import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./components/Main";
import EventDetails from "./components/EventDetails";
import Eventpage from "./components/Eventpage";

import { eventDetails } from "./data.js";

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
