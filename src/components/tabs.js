import React from "react";

import { ReactComponent as House } from "../assets/house.svg";
import TabContent from "./TabContent";

import tech from "../assets/tech.png";

const tabs = [
  {
    title: "Technical",
    id: "flights",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
  },
  {
    title: "Fun",
    id: "hotels",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
  },
  {
    title: "Pronites",
    id: "reservations",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
  },
  {
    title: "Pre-events",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
  },
  {
    title: "Cultural",
    id: "offers",
    icon: tech,
    color: "#63a7c7",
    content: TabContent,
  },
];

export default tabs;
