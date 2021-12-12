// Technical Events
import Codewars from "../assets/Codewars.jpg";
import CodatronPlusPlus from "../assets/codatron++.jpg";
import Codatron from "../assets/Codatron.jpg";
import Startathon from "../assets/Startathon.jpg";
import VSM from "../assets/VSM.jpg";

// Cultural
import AEJ from "../assets/AelanEJang.jpg";
import Sargam from "../assets/Sargam.jpg";

// Pronites
import PR from "../assets/Pronite.png";
import WOB from "../assets/WOB.png";

// Fun events
import IPL from "../assets/IPL.jpg";
import OnlineGaming from "../assets/OnlineGaming.jpg";
import VirtualTreasure from "../assets/VirtualTreasure.jpg";

// Preevents
import ShortCircuit from "../assets/ShortCircuit.jpg";
import Hackathon from "../assets/hackathon.jpg";

import firebase from "firebase";

export const IMAGES = {
  Codewars,
  CodatronPlusPlus,
  Codatron,
  Startathon,
  VSM,
  PR,
  WOB,
  IPL,
  OnlineGaming,
  VirtualTreasure,
  ShortCircuit,
  Hackathon,
  AEJ,
  Sargam,
};

export const EVENT_DATA = [
  // Technical
  {
    name: "CodeWars",
    img: Codewars,
    path: "codewars",
    type: "Technical",
  },
  {
    name: "Codatron++",
    img: CodatronPlusPlus,
    path: "codatronplusplus",
    type: "Technical",
  },
  {
    name: "Codatron",
    img: Codatron,
    path: "codatron",
    type: "Technical",
  },
  {
    name: "Startathon",
    img: Startathon,
    path: "startathon",
    type: "Technical",
  },
  {
    name: "Virtual Stock Market",
    img: VSM,
    path: "vsm",
    type: "Technical",
  },
  // Fun
  {
    name: "IPL Auction",
    img: IPL,
    path: "ipl",
    type: "Fun",
  },
  {
    name: "Online Gaming",
    img: OnlineGaming,
    path: "onlinegaming",
    type: "Fun",
  },
  {
    name: "Virtual Treasure Hunt",
    img: VirtualTreasure,
    path: "virtualtreasure",
    type: "Fun",
  },
  // Cultural

  {
    name: "AelanEJang",
    img: AEJ,
    path: "aej",
    type: "Cultural",
  },
  {
    name: "Sargam",
    img: Sargam,
    path: "sargam",
    type: "Cultural",
  },
  {
    name: "WOB",
    img: WOB,
    path: "wob",
    type: "Cultural",
  },

  // Prevents
  {
    name: "Short Circuit",
    img: ShortCircuit,
    path: "shortcircuit",
    type: "Pre-events",
  },
  {
    name: "SPIT Hackathon",
    img: Hackathon,
    path: "hackathon",
    type: "Pre-events",
  },
];

export const OC_GRADIENT = "linear-gradient(to right, #ff4b2b, #ff416c)";

// CULTURAL
// Aelan-e-Jung ->
// Sargam
// WOB
// Abhinaya
// Carnival
// Open Mic

// TECHNICAL
// Oculus Coding League
// Short Circuit / Hardware
// VSM

// FUN
// IPL
// E-sports
// Paintball
// Footpool
// Human Foosball

// PRE-EVENTS
// SPIT Hackathon
// Advert Einstein
// Tech Race
