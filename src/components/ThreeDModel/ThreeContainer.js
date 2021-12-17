import React, { useEffect, useState } from "react";

// Styles
import "../../styles/ThreeContainer.scss";
import { preload } from "./script";

const ThreeContainer = ({ loading, setLoading }) => {
  const [data, setData] = useState(true);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showModel, setShowModel] = useState(false);

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
      // IMPORTANT: check the origin of the data!
      // console.log("message is here: ", event.data);
      if (event.origin.startsWith("https://oculus2021-c12c7.web.app")) {
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        setIsModelLoaded(true);
        setData(false);
        console.log("From iframe", event.data);
      } else {
        // The data was NOT sent from your site!
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return;
      }
    });
  }, []);

  return (
    <>
      {/* {data ? (
        <div id="magic" style={{ height: "100%", zIndex: "10" }}>
          <div className={data ? "testDiv" : ""}>
            {!data ? (
              <></>
            ) : (
              <button
                className="testDiv-btn"
                onClick={() => {
                  console.log("loaded");
                  setData(false);
                }}
              >
                {isModelLoaded ? "Loading Model..." : "Go To College"}
              </button>
            )}
          </div>
        </div>
      ) : null} */}
      {showModel ? null : (
        <div id="magic" style={{ height: "100%", zIndex: "10" }}>
          <div className={"testDiv"}>
            <button
              className="testDiv-btn"
              onClick={() => {
                // console.log("loaded");
                setShowModel(true);
                setData(false);
              }}
            >
              {isModelLoaded ? "Go To College" : "Loading Model..."}
            </button>
          </div>
        </div>
      )}
      <div className={false ? " canvaDiv canvaBefore" : "canvaDiv canvaAfter"}>
        <iframe
          src={"https://oculus2021-c12c7.web.app/"}
          // src="http://localhost:3005/"
          height={"100%"}
          width={"100%"}
          zIndex={-1}
          title="model"
          id="i_frame"
        ></iframe>
      </div>
    </>
  );
};

export default ThreeContainer;
