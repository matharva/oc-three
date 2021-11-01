import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import EventDetails from "./pages/EventDetails";
import Eventpage from "./pages/Eventpage";
import Sponsors from "./pages/Sponsors";

import { eventDetails } from "./data.js";
import ContactUs from "./pages/ContactUs";
import DonationDrive from "./pages/DonationDrive";

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
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/donation-drive">
            <DonationDrive />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
