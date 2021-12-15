// Components
import TabContent from "./TabContent";

// Assets
// import tech from "../../assets/tech.png";
import tech from "../../assets/tech.jpg";
import fun from "../../assets/fun.jpeg";
import pre from "../../assets/pre-events.jpeg";
import cult from "../../assets/cultural.jpeg";

import { EVENT_DATA, OC_BG } from "../../services/helpers";

const tabs = [
  {
    title: "Technical",
    id: "hotels",
    icon: tech,
    // color: "#63a7c7",
    // color: "#15202B",
    color:
      "linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Technical"),
  },
  {
    title: "Fun",
    id: "hotels",
    icon: fun,
    color:
      "linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
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
    title: "Pre-Events",
    id: "offers",
    icon: pre,
    color:
      "linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Pre-events"),
  },
  {
    title: "Cultural",
    id: "offers",
    icon: cult,
    color:
      "linear-gradient(to right, #E96343 2.2014%, #904F95 56.7093%, #2D4FA2 100%)",
    content: TabContent,
    cards: EVENT_DATA.filter((x) => x.type === "Cultural"),
  },
];

// console.log(tab);
export default tabs;
