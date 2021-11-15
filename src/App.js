import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Data
import { eventDetails } from "./data.js";

// Pages
import Main from "./pages/Main";
import EventDetails from "./pages/EventDetails";
import Eventpage from "./pages/Eventpage";
import Sponsors from "./pages/Sponsors";
import ContactUs from "./pages/ContactUs";
import DonationDrive from "./pages/DonationDrive";

import { AuthProvider } from "./contexts/AppContext";

import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./pages/Profile.js";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/events/:eventName">
            <EventDetails event={eventDetails[0]} />
          </Route>
          <Route path="/events">
            <Eventpage />
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
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
