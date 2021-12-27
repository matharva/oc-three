import React, { useState, useRef, useEffect, Suspense } from "react";

// Styles
import "../styles/Main.scss";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

// Assets
import Oc from "../assets/Oculus.png";

// Components
import ThreeContainer from "../components/ThreeDModel/ThreeContainer";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";
import Footer from "../components/Footer";
import CustomLoader from "../components/Customloader";
import Loader3d from "../components/ThreeDModel/Loader3d";
import EventCarousel from "../components/MainPageComponents/EventCarousel";
import Features from "../components/MainPageComponents/Features";
import FeatureHeader from "../components/MainPageComponents/FeatureHeader";
import { Heading, Text } from "@chakra-ui/react";
import MobileComp from "../components/MainPageComponents/MobileComp";

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="model-box">{children}</div>
      </div>
    </>
  );
};

const Main = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <DesktopNav />
      <MobileNav />

      <div className="scroll-container">
        <MainContainer>
          {/* <ThreeContainer loading={loading} setLoading={setLoading} /> */}
          <Loader3d />
        </MainContainer>

        <div className="main-container maintain-width ">
          <div
            className="model-box"
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Our Events
            </Text>
            {/* <div className="section-title">Our Events</div> */}
            <EventCarousel />
          </div>
        </div>

        <div className="main-container ">
          <div className="model-box maintain-width">
            <Heading size={["2xl"]} textAlign={"center"} padding={"1rem"}>
              How to register for events
            </Heading>
            <Text size={["sm"]} textAlign={"center"} padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sed cum quasi, voluptatem consequuntur alias? Nobis
              rem, veritatis, nam aspernatur fugit deleniti, dolorem molestiae
              fuga dolor voluptatum saepe! Similique, natus dicta dignissimos
              suscipit fugit sed excepturi ipsam amet doloribus non quos ab
              accusamus accusantium enim veniam earum esse expedita officiis?
            </Text>
            {/* <div className="section-title">How to register for events</div> */}
            {/* <FeatureHeader /> */}
            <Features />
          </div>
        </div>
        <div className="main-container ">
          <div className="model-box">
            <MobileComp />
          </div>
        </div>
        <div className="main-container ">
          <div
            className="model-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            mnerch
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
