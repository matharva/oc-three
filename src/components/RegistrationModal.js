import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../styles/RegistrationModal.scss";

// Assets
import Oc from "../assets/tech.png";
import Payment from "../assets/done.jpg";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MultiplePlayers = ({ setIsPaymentSuccess }) => {
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

const SinglePlayer = ({ setIsPaymentSuccess }) => {
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

const TeamModal = () => {
  return (
    <div className="team-modal">
      <h1>Team Code: #75948023</h1>
      <div className="team-members">
        <div className="team-member-items">
          <div className="team-member-item-img-container">
            <img src={Oc} alt="" />
          </div>
          <div className="items-info">
            <div className="team-member-item-name">Bhushan</div>
            <div className="team-member-item-email">bhushan@bhushan.com</div>
          </div>
        </div>
        <div className="team-member-items">
          <div className="team-member-item-img-container">
            <img src={Oc} alt="" />
          </div>
          <div className="items-info">
            <div className="team-member-item-name">Atharva Mohite</div>
            <div className="team-member-item-email">
              atharvamohite20@gmail.com
            </div>
          </div>
        </div>
        <div className="team-member-items">
          <div className="team-member-item-img-container">
            <img src={Oc} alt="" />
          </div>
          <div className="items-info">
            <div className="team-member-item-name">Bhushan</div>
            <div className="team-member-item-email">bhushan@bhushan.com</div>
          </div>
        </div>
        <div className="team-member-items">
          <div className="team-member-item-img-container">
            <img src={Oc} alt="" />
          </div>
          <div className="items-info">
            <div className="team-member-item-name">Bhushan</div>
            <div className="team-member-item-email">bhushan@bhushan.com</div>
          </div>
        </div>
      </div>
      <button>
        <WhatsAppIcon style={{ color: "white" }} />
        Join on WhatsApp
      </button>
    </div>
  );
};

const PaymentSuccessful = ({ setIsRegistered }) => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <h1>Successful Payment</h1>
      </div>
      <p>Your payement for event codewars was successfully completed</p>
      <button
        className="team-details-btn"
        onClick={() => setIsRegistered(true)}
      >
        Team Details
      </button>
    </div>
  );
};

const RegistrationModal = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(true);
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
      padding: 0,
      transform: "translate(-50%, -50%)",
      height: "60vh",
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
          <CloseIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>
        {/* {!isRegistered && isSinglePlayer  ? <SinglePlayer /> : <MultiplePlayers />} */}
        {/* <MultiplePlayers /> */}
        {isRegistered ? (
          <TeamModal />
        ) : (
          isPaymentSuccess && (
            <PaymentSuccessful setIsRegistered={setIsRegistered} />
          )
        )}
      </Modal>
    </div>
  );
};

export default RegistrationModal;
