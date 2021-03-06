import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Profile from "./pages/Profile.js";

import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Terms from "./pages/Terms.js";
import RefundPolicy from "./pages/RefundPolicy.js";

// import "./styles.css";

// const theme = extendTheme({
//   components: {
//     Modal: {
//       baseStyle: (props) => ({
//         dialog: {
//           maxWidth: ["95%", "95%", "95%"],
//           minWidth: "95%",
//           bg: "linear-gradient(to right, #ff4b2b, #ff416c)",
//         },
//       }),
//     },
//   },
// });

import { Global, css } from "@emotion/react";
import LoginModal from "./components/registration/Login/LoginModal.js";
import MarketPlace from "./pages/MarketPlace.js";
import Merchandise from "./pages/Merchandise.js";
import AboutUs from "./pages/AboutUs.js";
import { OC_GRADIENT } from "./services/helpers.js";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#44337A",
      100: "#B794F4",
      500: OC_GRADIENT, // you need this
    },
  },
});
const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ChakraProvider> */}
      {/* <Global styles={GlobalStyles}> */}
      <AuthProvider>
        <Router>
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
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/termsnconditions">
              <Terms />
            </Route>
            <Route path="/refund-policy">
              <RefundPolicy />
            </Route>
            <Route path="/marketplace">
              <MarketPlace />
            </Route>
            <Route path="/merch">
              <Merchandise />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            {/* <Route path="/model">
              <AboutUs />
            </Route> */}
          </Switch>
        </Router>
        <LoginModal />
      </AuthProvider>
      {/* </Global> */}
    </ChakraProvider>
  );
}
