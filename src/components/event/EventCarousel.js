import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import ThreeDCard from "./ThreeDCard";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  // fade: true,
  // infinite: true,
  // autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: window.innerWidth > 720 ? 3 : 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  // const [slider, setSlider] = (React.useState < Slider) | (null > null);
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      complete: true,
      name: "IPL",
    },
    {
      complete: true,
      name: "IfdafdsfasPL",
    },
    {
      complete: true,
      name: "IPfadsfdaL",
    },
    {
      complete: true,
      name: "IPLffffff",
    },
    {
      complete: true,
      name: "IPL",
    },
  ];

  return (
    <Box
      position={"relative"}
      // height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <ThreeDCard data={cards[0]} />
        <ThreeDCard data={cards[0]} />
        <ThreeDCard data={cards[0]} />
        <ThreeDCard data={cards[0]} />
        <ThreeDCard data={cards[0]} />
      </Slider>
      {/* </div> */}
    </Box>
  );
}
