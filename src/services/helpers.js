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

export const map = {
  ipl: {
    Title: "IPL Auction",
    image: IMAGES.IPL,
    firestoreImg: "",
  },
  vsm: {
    Title: "Virtual Stock Market",
    image: IMAGES.VSM,
  },
  codatronplusplus: {
    Title: "Codatron++",
    image: IMAGES.CodatronPlusPlus,
  },
  sargam: {
    Title: "Sargam",
    image: IMAGES.Sargam,
  },
  carinval: {
    Title: "Carnival",
    image: IMAGES.Sargam,
  },
  aej: {
    Title: "Aelan-e-Jung",
    image: IMAGES.AEJ,
  },
  mun: {
    Title: "Model United Nations",
    image: IMAGES.Sargam,
  },
  shortcircuit: {
    Title: "Short Circuit",
    image: IMAGES.ShortCircuit,
  },
};

export const OC_GRADIENT = "linear-gradient(to right, #ff4b2b, #ff416c)";
