import React, { useEffect, useState } from "react";

// Styles
import "../../styles/ThreeContainer.scss";
import { preload } from "./script";

const ThreeContainer = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showNavigationCard, setShowNavigationCard] = useState(true);

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
                setShowModel(true);
                setTimeout(() => setShowNavigationCard(false), 2000);
              }}
            >
              {isModelLoaded ? "Go To College" : "Loading Model..."}
            </button>
          </div>
        </div>
      )}

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
