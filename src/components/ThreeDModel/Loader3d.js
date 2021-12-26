import React, { useEffect, useState } from "react";

// Styles
import "../../styles/ThreeContainer.scss";
import { preload } from "./script";

const Loader3d = () => {
  const [isTimeComplete, setIsTimeComplete] = useState(false);
  useEffect(() => {
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
    )
      preload();
    else document.addEventListener("DOMContentLoaded", preload);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsTimeComplete(true);
    }, 4000);
  }, []);
  return (
    <div id="magic">
      <div className={"testDiv"}>
        <button className="testDiv-btn">
          {isTimeComplete ? "Scroll Down" : "Click anywhere"}
        </button>
      </div>
    </div>
  );
};

export default Loader3d;
