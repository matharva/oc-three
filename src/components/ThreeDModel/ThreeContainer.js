import React, { useEffect, useState } from "react";

// Styles
import "../../styles/ThreeContainer.scss";
// import { preload } from "../tabs/script";

const ThreeContainer = ({ loading, setLoading }) => {
  const [data, setData] = useState(true);

  // useEffect(() => {
  //   preload();
  // }, []);

  return (
    <>
      {data ? (
        <div id="magic" style={{ height: "100%", zIndex: "10" }}>
          <div className={!false ? "testDiv" : ""}>
            {false ? (
              <></>
            ) : (
              <button
                className="testDiv-btn"
                onClick={() => {
                  console.log("loaded");
                  setData(false);
                }}
              >
                Go To College
              </button>
            )}
          </div>
        </div>
      ) : null}
      <div className={data ? " canvaDiv canvaBefore" : "canvaDiv canvaAfter"}>
        <iframe
          src={"https://oculus2021-c12c7.web.app/"}
          height={"100%"}
          width={"100%"}
          zIndex={-1}
          title="model"
        ></iframe>
      </div>
    </>
  );
};

export default ThreeContainer;
