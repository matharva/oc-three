import Payment from "../../../assets/done.jpg";
import { Heading, Button } from "@chakra-ui/react";

const PaymentSuccessful = ({ eventData, setViewTeam }) => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <Heading style={{ color: "white" }}>Successful Payment</Heading>
      </div>
      <p style={{ color: "white" }}>
        Your payment for event {eventData.Title} was successfully completed
      </p>
      {!eventData.isSingle && (
        // <button className="team-details-btn" onClick={() => setViewTeam(true)}>

        //   Team Details
        // </button>
        <Button
          colorScheme={"teal"}
          variant={"solid"}
          padding="0.5rem 1rem"
          onClick={() => setViewTeam(true)}
        >
          Confirm
        </Button>
      )}
    </div>
  );
};

export default PaymentSuccessful;
