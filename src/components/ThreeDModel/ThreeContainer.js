import React, { useEffect, useState } from "react";
import InfoDesktop from "../../assets/info_desktop.png";
import InfoMobile from "../../assets/info_mobile.png";

// Styles
import "../../styles/ThreeContainer.scss";
import { preload } from "./script";

function InfoCard({ showNavigationCard, setShowNavigationCard }) {
  const imgSource = window.innerWidth > 720 ? InfoDesktop : InfoMobile;
  return (
    <div
      className={`info-card-container ${!showNavigationCard && "fade-hidden"}`}
      onClick={() => setShowNavigationCard(false)}
    >
      <img src={imgSource} alt="" />
    </div>
  );
}

const ThreeContainer = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showNavigationCard, setShowNavigationCard] = useState(false);

  useEffect(() => {
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
    )
      preload();
    else document.addEventListener("DOMContentLoaded", preload);
  }, []);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (!event.origin.startsWith("https://oculus2021-c12c7.web.app")) return;
      setIsModelLoaded(true);
      console.log("From iframe", event.data);
    });
  }, []);

  return (
    <>
      {showModel ? null : (
        <div id="magic">
          <div className={"testDiv"}>
            <button
              className="testDiv-btn"
              disabled={!isModelLoaded}
              onClick={() => {
                console.log("Model loaded");
                setShowModel(true);
                setShowNavigationCard(true);
                setTimeout(() => setShowNavigationCard(false), 8000);
              }}
            >
              {isModelLoaded ? "Go To College" : "Loading Model..."}
            </button>
          </div>
        </div>
      )}
      <InfoCard
        showNavigationCard={showNavigationCard}
        setShowNavigationCard={setShowNavigationCard}
      />

      <iframe
        className={`model-iframe-container ${!showModel && "hide"}`}
        src={"https://oculus2021-c12c7.web.app/"}
        // src="http://localhost:3005/"
        height={"100%"}
        width={"100%"}
        zIndex={-1}
        title="model"
        id="i_frame"
      ></iframe>
    </>
  );
};

export default ThreeContainer;
