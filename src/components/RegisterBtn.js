import React from "react";
import "../styles/RegisterBtn.scss";

const RegisterBtn = () => {
  return (
    <button class="learn-more">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">Registration</span>
    </button>
  );
};

export default RegisterBtn;
