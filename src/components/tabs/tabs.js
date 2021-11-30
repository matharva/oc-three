// Components
import TabContent from "./TabContent";

// Assets
import tech from "../../assets/tech.png";

// Technical Events
import Codewars from "../../assets/Codewars.jpg";
import CodatronPlusPlus from "../../assets/codatron++.jpg";
import Codatron from "../../assets/Codatron.jpg";
import Startathon from "../../assets/Startathon.jpg";
import VSM from "../../assets/VSM.jpg";

// Cultural
import AEJ from "../../assets/AelanEJang.jpg";
import Sargam from "../../assets/Sargam.jpg";

// Pronites
import PR from "../../assets/Pronite.png";
import WOB from "../../assets/WOB.png";

// Fun events
import IPL from "../../assets/IPL.jpg";
import OnlineGaming from "../../assets/OnlineGaming.jpg";
import VirtualTreasure from "../../assets/VirtualTreasure.jpg";

// Preevents
import ShortCircuit from "../../assets/ShortCircuit.jpg";
import Hackathon from "../../assets/hackathon.jpg";

const tabs = [
  {
    title: "Technical",
    id: "flights",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: [
      {
        name: "CodeWars",
        img: Codewars,
        path: "codewars",
      },
      {
        name: "Codatron++",
        img: CodatronPlusPlus,
        path: "codatronplusplus",
      },
      {
        name: "Codatron",
        img: Codatron,
        path: "codatron",
      },
      {
        name: "Startathon",
        img: Startathon,
        path: "startathon",
      },
      {
        name: "VSM",
        img: VSM,
        path: "vsm",
      },
    ],
  },
  {
    title: "Fun",
    id: "hotels",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: [
      {
        name: "IPL Auction",
        img: IPL,
        path: "ipl",
      },
      {
        name: "Online Gaming",
        img: OnlineGaming,
        path: "onlinegaming",
      },
      {
        name: "Virtual Treasure Hunt",
        img: VirtualTreasure,
        path: "virtualtreasure",
      },
    ],
  },
  {
    title: "Pronites",
    id: "reservations",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: [
      {
        name: "Pronite",
        img: PR,
        path: "pronite",
      },
      {
        name: "WOB",
        img: WOB,
        path: "wob",
      },
    ],
  },
  {
    title: "Pre-events",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: [
      {
        name: "Short Circuit",
        img: ShortCircuit,
        path: "shortcurcuit",
      },
      {
        name: "SPIT Hackathon",
        img: Hackathon,
        path: "hackathon",
      },
    ],
  },
  {
    title: "Cultural",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: [
      {
        name: "AelanEJang",
        img: AEJ,
        path: "aej",
      },
      {
        name: "Sargam",
        img: Sargam,
        path: "sargam",
      },
    ],
  },
];

export default tabs;
