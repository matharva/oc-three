import React from "react";

import { ReactComponent as House } from "../assets/house.svg";
import TabContent from "./TabContent";

const tabs = [
  {
    title: "Technical",
    id: "flights",
    icon: <House />,
    color: "#5d5dff",
    content: TabContent,
  },
  {
    title: "Fun",
    id: "hotels",
    icon: <House />,
    color: "#67bb67",
    content: TabContent,
  },
  {
    title: "Pronites",
    id: "reservations",
    icon: <House />,
    color: "#63a7c7",
    content: TabContent,
  },
  {
    title: "Pre-events",
    id: "offers",
    icon: <House />,
    color: "#f56868",
    content: TabContent,
  },
  {
    title: "Cultural",
    id: "offers",
    icon: <House />,
    color: "#f56868",
    content: TabContent,
  },
];

export default tabs;
