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
import { EVENT_DATA } from "../../services/helpers";

const tabs = [
  {
    title: "Technical",
    id: "hotels",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Technical"),
  },
  {
    title: "Fun",
    id: "hotels",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Fun"),
  },
  // {
  //   title: "Pronites",
  //   id: "reservations",
  //   icon: tech,
  //   color: "#63a7c7",
  //   content: TabContent,
  //   cards: EVENT_DATA.filter((x) => x.type === "Pronites"),
  // },
  {
    title: "Pre-events",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Pre-events"),
  },
  {
    title: "Cultural",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Cultural"),
  },
];

// console.log(tab);
export default tabs;
