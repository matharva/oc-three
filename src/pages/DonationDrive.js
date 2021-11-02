import React, { useEffect } from "react";

// Components
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

import { Redirect } from "react-router-dom";

const DonationDrive = () => {
  useEffect(() => {
    window.location.href =
      "https://www.ketto.org/fundraiser/oculus-for-a-cause?utm_source=external_ct&utm_medium=whatsapp&utm_Campaign=sm_campaigner_sac_w4";
  }, []);

  return <Redirect to="/" />;
};

export default DonationDrive;
