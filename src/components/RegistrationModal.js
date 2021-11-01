import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../styles/RegistrationModal.scss";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const MultiplePlayers = () => {
  return (
    <>
      <div className="modal-grid">
        <div className="section-one">
          <h1>Join a team</h1>
          <input type="text" placeholder="Enter your team code..." />
          <button>Join</button>
        </div>
        <div className="section-two">
          <p>
            Once you click on the button, you will be redirected to the Razorpay
            dashboard!
          </p>
          <button>Create a team</button>
        </div>
      </div>
    </>
  );
};

const SinglePlayer = () => {
  return (
    <div className="modal-grid-one">
      <p>
        Once you click on the button, you will be redirected to the Razorpay
        dashboard!
      </p>
      <button>Pay</button>
    </div>
  );
};

const RegistrationModal = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 720) {
      setIsMobile(false);
    } else setIsMobile(true);
    const resizeListener = () => {
      if (window.innerWidth > 720) {
        setIsMobile(false);
      } else setIsMobile(true);
    };
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      // border: "2px solid red",
      padding: 0,
      transform: "translate(-50%, -50%)",
      height: "50vh",
      width: `${!isMobile ? "50vw" : "90vw"}`,
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cross-child" onClick={() => setIsOpen(false)}>
          <CloseIcon style={isMobile ? {} : { color: "white" }} />
        </div>
        {false ? <SinglePlayer /> : <MultiplePlayers />}
      </Modal>
    </div>
  );
};

export default RegistrationModal;
