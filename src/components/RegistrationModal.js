import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../styles/RegistrationModal.scss";

// Assets
import Oc from "../assets/tech.png";
import Payment from "../assets/done.jpg";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { eventService } from "../services/eventService";

const MultiplePlayers = ({
  setPayTypeOpen,
  eventData,
  currentUser,
  setJoin,
  setIsOpen,
}) => {
  console.log("ksejygk");
  const [code, setCode] = useState();
  const [message, setMessage] = useState("");

  const joinUser = async () => {
    console.log("The code is: ", code);
    let joinData = await eventService.joinUser({
      teamCode: code,
      userId: currentUser.uid,
      eventName: eventData.Title,
    });
    if (!joinData.Message.includes("unsuccessfully")) {
      setJoin(true);
      setIsOpen(false);
    } else {
      setMessage(joinData.Message);
    }
  };

  return (
    <>
      <div className="modal-grid">
        <div className="section-one">
          <h1>Join a team</h1>
          <input
            type="text"
            placeholder="Enter your team code..."
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
          />
          <button onClick={joinUser}>Join</button>
          <p>{message}</p>
        </div>
        <div className="section-two">
          <h1>Referral Code</h1>
          <input type="text" placeholder="Enter referral code..." />
          <p>
            Once you click on the button, you will be redirected to the Razorpay
            dashboard!
          </p>
          <button
            onClick={() => {
              console.log("wkuyehgfuyg");
              setPayTypeOpen(true);
            }}
          >
            Create a team
          </button>
        </div>
      </div>
    </>
  );
};

const SinglePlayer = ({
  setPaymentDone,
  setIsPaymentSuccess,
  eventData,
  currentUser,
}) => {
  async function showRazorpayModal(amount) {
    console.log("The result is:", amount);
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Dard");
      return;
    }
    const data = {
      event: "divya",
      amount: parseInt(amount),
    };

    console.log("The result is:", result, data, eventData);
    // const resData = await axios.post('https://us-central1-oculus2022-75997.cloudfunctions.net/payment',data)

    // console.log('The resData is: ',resData);

    let paymentData = await eventService.postPayment({
      paymentId: "1234568",
      eventName: eventData.Title,
      userId: currentUser.uid,
    });
    if (paymentData) {
      setPaymentDone(true);
      setIsPaymentSuccess(true);
    }

    // const options = {
    //   "key": resData?.data?.key, // Enter the Key ID generated from the Dashboard
    //   "amount": resData?.data?.order?.amount,// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   "currency": "INR",
    //   "name": "Dard",
    //   "description": "Daddy Transaction",
    //   "image": Daddy,
    //   "order_id": resData?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   "handler": function (response){
    //       alert(response.razorpay_payment_id);
    //       alert(response.razorpay_order_id);
    //       alert(response.razorpay_signature)
    //   },
    //   "prefill": {
    //       "name": "Bhushan",
    //   },
    //   "notes": {
    //       "address": "Razorpay Corporate Office"
    //   },
    //   "theme": {
    //       "color": "#3399cc"
    //   }
    // };
    // console.log('The options are: ',options);
    // var rzp1 = new window.Razorpay(options);

    // rzp1.open();
  }

  return (
    <div className="modal-grid-one">
      <p>
        Once you click on the button, you will be redirected to the Razorpay
        dashboard!
      </p>
      <button
        onClick={() => {
          showRazorpayModal(eventData.Fee[0].Fee);
        }}
      >
        Pay
      </button>
    </div>
  );
};

const TeamModal = ({ userTeam }) => {
  console.log("The user team is: ", userTeam);
  return (
    <div className="team-modal">
      <h1>Team Code:{userTeam.TeamCode}</h1>
      <div className="team-members">
        {/* <div className="team-member-items">
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
        </div> */}
        {userTeam.member.map((item) => {
          return (
            <>
              <div className="team-member-items">
                <div className="team-member-item-img-container">
                  <img src={Oc} alt="" />
                </div>
                <div className="items-info">
                  <div className="team-member-item-name">{item.name}</div>
                  <div className="team-member-item-email">{item.email}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button>
        <WhatsAppIcon style={{ color: "white" }} />
        Join on WhatsApp
      </button>
    </div>
  );
};

const PaymentSuccessful = ({ eventData, setViewTeam }) => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <h1>Successful Payment</h1>
      </div>
      <p>Your payement for event codewars was successfully completed</p>
      {!eventData.isSingle && (
        <button className="team-details-btn" onClick={() => setViewTeam(true)}>
          Team Details
        </button>
      )}
    </div>
  );
};

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      console.log("done");
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

const ShowPaymentDetails = ({
  details,
  eventName,
  setPaymentDone,
  setIsPaymentSuccess,
  currentUser,
}) => {
  console.log("The details are: ", details);

  async function showRazorpayModal(amount) {
    console.log("The result is:", amount);
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Dard");
      return;
    }
    const data = {
      event: "divya",
      amount: parseInt(amount),
    };

    console.log("The result is:", result, data, eventName);
    // const resData = await axios.post('https://us-central1-oculus2022-75997.cloudfunctions.net/payment',data)

    // console.log('The resData is: ',resData);

    let paymentData = await eventService.postPayment({
      paymentId: "1234567",
      eventName: eventName,
      userId: currentUser.uid,
    });
    console.log("The payment data is: ", paymentData);
    if (paymentData.registrationDetails) {
      setPaymentDone(true);
      setIsPaymentSuccess(true);
    }

    // const options = {
    //   "key": resData?.data?.key, // Enter the Key ID generated from the Dashboard
    //   "amount": resData?.data?.order?.amount,// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   "currency": "INR",
    //   "name": "Dard",
    //   "description": "Daddy Transaction",
    //   "image": Daddy,
    //   "order_id": resData?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   "handler": function (response){
    //       alert(response.razorpay_payment_id);
    //       alert(response.razorpay_order_id);
    //       alert(response.razorpay_signature)
    //   },
    //   "prefill": {
    //       "name": "Bhushan",
    //   },
    //   "notes": {
    //       "address": "Razorpay Corporate Office"
    //   },
    //   "theme": {
    //       "color": "#3399cc"
    //   }
    // };
    // console.log('The options are: ',options);
    // var rzp1 = new window.Razorpay(options);

    // rzp1.open();
  }

  return (
    <div className="payment-success-modal">
      {details.map((item) => {
        return (
          <>
            <button
              className="reg-btn"
              onClick={() => {
                showRazorpayModal(item.Fee);
              }}
            >
              Pay {item.Type} : {item.Fee}
            </button>
            {/* <span>{item.Fee}</span> */}
            <br />
          </>
        );
      })}
    </div>
  );
};

const RegistrationModal = ({
  userTeam,
  viewTeam,
  setViewTeam,
  isOpen,
  setIsOpen,
  eventData,
  paymentDone,
  setPaymentDone,
  currentUser,
  setJoin,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [payTypeOpen, setPayTypeOpen] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  console.log("The type is: ", eventData, viewTeam);
  useEffect(() => {
    if (viewTeam) {
      setIsRegistered(true);
    }
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

  // Whenever user logs in through a different account set the payment model as false
  useEffect(() => {
    setIsPaymentSuccess(false);
  }, [currentUser]);

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
  console.log("Pay type: ", payTypeOpen);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          // if(!isRegistered)
          if (paymentDone) {
            setViewTeam(true);
          }

          setPayTypeOpen(false);
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="cross-child"
          onClick={() => {
            if (paymentDone) {
              setViewTeam(true);
            }
            setPayTypeOpen(false);
            setIsOpen(false);
          }}
        >
          <CloseIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>
        {viewTeam ? (
          <TeamModal userTeam={userTeam} />
        ) : isPaymentSuccess ? (
          <PaymentSuccessful eventData={eventData} setViewTeam={setViewTeam} />
        ) : eventData.isSingle ? (
          <SinglePlayer
            setPaymentDone={setPaymentDone}
            setIsPaymentSuccess={setIsPaymentSuccess}
            eventData={eventData}
            currentUser={currentUser}
          />
        ) : !payTypeOpen ? (
          <MultiplePlayers
            setPayTypeOpen={setPayTypeOpen}
            eventData={eventData}
            currentUser={currentUser}
            setJoin={setJoin}
            setIsOpen={setIsOpen}
          />
        ) : (
          <ShowPaymentDetails
            details={eventData.Fee}
            eventName={eventData.Title}
            setPaymentDone={setPaymentDone}
            setIsPaymentSuccess={setIsPaymentSuccess}
            currentUser={currentUser}
          />
        )}
        {/* {!isRegistered && eventData.isSingle? <SinglePlayer /> : !payTypeOpen?<MultiplePlayers setPayTypeOpen = {setPayTypeOpen}/>:<ShowPaymentDetails details={eventData.Fee} eventName={eventData.Title} setPaymentDone = {setPaymentDone}/>} */}
        {/* <MultiplePlayers /> */}
        {/* {isRegistered ? (
          <TeamModal />
        ) : (
          isPaymentSuccess && (
            <PaymentSuccessful setIsRegistered={setIsRegistered} />
          )
        )} */}
      </Modal>
    </div>
  );
};

export default RegistrationModal;
