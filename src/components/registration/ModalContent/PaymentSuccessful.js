import Payment from "../../../assets/done.jpg";

const PaymentSuccessful = ({ eventData, setViewTeam }) => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <h1>Successful Payment</h1>
      </div>
      <p>
        Your payement for event {eventData.Title} was successfully completed
      </p>
      {!eventData.isSingle && (
        <button className="team-details-btn" onClick={() => setViewTeam(true)}>
          Team Details
        </button>
      )}
    </div>
  );
};

export default PaymentSuccessful;
