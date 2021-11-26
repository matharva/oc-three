import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import "../../styles/RegistrationModal.scss";

// Assets
import Oc from "../../assets/tech.png";
import Payment from "../../assets/done.jpg";

// Icons
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { eventService } from "../../services/eventService";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Form, Button } from "react-bootstrap";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AppContext";

const MultiplePlayers = ({
  setPayTypeOpen,
  eventData,
  currentUser,
  setJoin,
  setIsOpen,
  setJoinTypeOpen,
}) => {
  console.log("ksejygk");
  // const [code, setCode] = useState();
  // const [message, setMessage] = useState("");

  const joinUser = async () => {
    console.log("The code is: ");
    setJoinTypeOpen(true);
    setPayTypeOpen(true);
    // let joinData = await eventService.joinUser({
    //   teamCode: code,
    //   userId: currentUser.uid,
    //   eventName: eventData.Title,
    // });
    // if (!joinData.Message.includes("unsuccessfully")) {
    //   setJoin(true);
    //   setIsOpen(false);
    // } else {
    //   setMessage(joinData.Message);
    // }
  };

  return (
    <>
      <div className="modal-grid">
        <div className="section-one">
          <h1>Join a team</h1>
          {/* <input
            type="text"
            placeholder="Enter your team code..."
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
          /> */}
          <button onClick={joinUser}>Join</button>
          {/* <p>{message}</p> */}
        </div>
        <div className="section-two">
          {/* <h1>Referral Code</h1>
          <input type="text" placeholder="Enter referral code..." /> */}
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
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [refCode, setRefCode] = useState(null);

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

    let updatedUser = await eventService.setUserPhoneNumber(
      phoneNumber,
      currentUser
    );
    if (updatedUser.phoneNumber) {
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
  }

  const phoneHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const refCodeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRefCode(value);
  };

  return (
    <div className="modal-grid-one">
      <p>
        Once you click on the button, you will be redirected to the Razorpay
        dashboard!
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="single-pay-form-div">
          {/* <input
            type="text"
            placeholder="Enter referral code..."
            value={refCode}
            onChange={refCodeHandler}
          />
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={phoneHandler}
            required
          ></input> */}
          <Form>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold" }}>Team Code </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Team Code"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                value={code}
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold" }}>
                Phone Number{" "}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={phoneHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold" }}>
                Referal Code{" "}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Referal Code"
                value={refCode}
                onChange={refCodeHandler}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          </Form>
        </div>
        <div className="form-btn-div">
          <button
            onClick={() => {
              showRazorpayModal(eventData.Fee[0].Fee);
              console.log("The data is: ", phoneNumber, refCode);
            }}
          >
            PAY
          </button>
        </div>
      </form>
      {/* </p> */}
    </div>
  );
};

const TeamModal = ({ userTeam }) => {
  console.log("The user team is: ", userTeam);
  return (
    // <div className="team-modal">
    //   <h1>Team Code:{userTeam.TeamCode}</h1>
    //   <div className="team-members">
    //     {/* <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Atharva Mohite</div>
    //         <div className="team-member-item-email">
    //           atharvamohite20@gmail.com
    //         </div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div>
    //     <div className="team-member-items">
    //       <div className="team-member-item-img-container">
    //         <img src={Oc} alt="" />
    //       </div>
    //       <div className="items-info">
    //         <div className="team-member-item-name">Bhushan</div>
    //         <div className="team-member-item-email">bhushan@bhushan.com</div>
    //       </div>
    //     </div> */}
    //     {userTeam.member.map((item) => {
    //       return (
    //         <>
    //           <div className="team-member-items">
    //             <div className="team-member-item-img-container">
    //               <img src={Oc} alt="" />
    //             </div>
    //             <div className="items-info">
    //               <div className="team-member-item-name">{item.name}</div>
    //               <div className="team-member-item-email">{item.email}</div>
    //             </div>
    //           </div>

    //           {/* <div className="items-info">
    //             <div className="team-member-item-name">{item.name}</div>
    //             <div className="team-member-item-email">{item.email}</div>
    //           </div> */}
    //         </>
    //       );
    //     })}
    //   </div>
    //   <button>
    //     <PhoneIcon style={{ color: "white" }} />
    //     Join on WhatsApp
    //   </button>
    // </div>
    <Table variant="simple">
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>Name</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {userTeam.member.map((item) => {
          return (
            <>
              {/* <div className="team-member-items">
                <div className="team-member-item-img-container">
                  <img src={Oc} alt="" />
                </div>
                <div className="items-info">
                  <div className="team-member-item-name">{item.name}</div>
                  <div className="team-member-item-email">{item.email}</div>
                </div>
              </div> */}
              <Tr>
                <Td>Blah</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
              </Tr>

              {/* <div className="items-info">
                <div className="team-member-item-name">{item.name}</div>
                <div className="team-member-item-email">{item.email}</div>
              </div> */}
            </>
          );
        })}
        {/* <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr> */}
      </Tbody>
      {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
    </Table>
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
  console.log("The details are: ", details, currentUser);

  // const [registerForm, setRegisterForm] = useState({
  //   paymentType: details[0].Type,
  //   phoneNumber: currentUser.phoneNumber,
  // });
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [paymentType, setPaymentType] = useState(details[0].Type);
  const [refCode, setRefCode] = useState(null);

  useEffect(() => {}, []);

  async function showRazorpayModal() {
    const amount = details.filter((i) => i.Type == paymentType)[0].Fee;
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

    let updatedUser = await eventService.setUserPhoneNumber(
      phoneNumber,
      currentUser
    );
    if (updatedUser.phoneNumber) {
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
  }

  const phoneHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setRegisterForm((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: {
    //       ...prevState[name],
    //       value: value,
    //       dirty: true,
    //     },
    //   };
    // });
    setPhoneNumber(value);
  };

  const paymentHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentType(value);
  };

  const refCodeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRefCode(value);
  };

  return (
    <div className="payment-success-modal">
      <h2
        style={{ paddingBottom: "2rem", fontWeight: "bold" }}
        className="form-header"
      >
        FILL IN THESE DETAILS
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <select
          name="type"
          id="paymentType"
          required
          placeholder="Choose Payment type"
          value={paymentType}
          onChange={paymentHandler}
        >
          {details.map((item) => {
            return (
              <>
                <option
                  value={`${item.Type}`}
                >{`${item.Type}: ${item.Fee}`}</option>
                <br />
              </>
            );
          })}
        </select>
        <br />
        <input
          type="text"
          placeholder="Contact number"
          value={phoneNumber}
          onChange={phoneHandler}
          required
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter referral code..."
          value={refCode}
          onChange={refCodeHandler}
        />
        <br /> */}
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label style={{ fontWeight: "bold" }}>
              Payment Type{" "}
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              size="lg"
              name="type"
              id="paymentType"
              required
              placeholder="Choose Payment type"
              value={paymentType}
              onChange={paymentHandler}
            >
              <option>Select Team Options</option>
              {/* <option value="1"></option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
              {details.map((item) => {
                return (
                  <>
                    <option
                      value={`${item.Type}`}
                    >{`${item.Type}: ${item.Fee}`}</option>
                    {/* <br /> */}
                  </>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Phone Number{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={phoneHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Referal Code{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Referal Code"
              value={refCode}
              onChange={refCodeHandler}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        <div className="form-btn-div">
          <button
            className="reg-btn"
            onClick={() => {
              showRazorpayModal();
              console.log(
                "The register form is: ",
                phoneNumber,
                paymentType,
                refCode
              );
            }}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

const ShowJoinTeamDetails = ({
  eventData,
  currentUser,
  setJoin,
  setIsOpen,
}) => {
  // console.log("The details are: ", details, currentUser);

  // const [registerForm, setRegisterForm] = useState({
  //   paymentType: details[0].Type,
  //   phoneNumber: currentUser.phoneNumber,
  // });
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [refCode, setRefCode] = useState("");

  useEffect(() => {}, []);

  const joinUser = async () => {
    console.log("The code is: ", phoneNumber, code, refCode);
    let updatedUser = await eventService.setUserPhoneNumber(
      phoneNumber,
      currentUser
    );
    if (updatedUser.phoneNumber) {
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
    }
  };

  const phoneHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPhoneNumber(value);
  };

  const refCodeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRefCode(value);
  };

  return (
    <div className="payment-success-modal">
      <h2
        style={{ paddingBottom: "2rem", fontWeight: "bold" }}
        className="form-header"
      >
        FILL IN THESE DETAILS
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <input
          type="text"
          placeholder="Enter your team code..."
          onChange={(e) => {
            setCode(e.target.value);
          }}
          value={code}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Contact number"
          value={phoneNumber}
          onChange={phoneHandler}
          required
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter referral code..."
          value={refCode}
          onChange={refCodeHandler}
        /> */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>Team Code </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Team Code"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              value={code}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Phone Number{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={phoneHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Referal Code{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Referal Code"
              value={refCode}
              onChange={refCodeHandler}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        {/* <br /> */}
        <div className="form-btn-div">
          <button
            className="reg-btn"
            onClick={() => {
              joinUser();
              console.log("The register form is: ", phoneNumber, code);
            }}
          >
            Confirm
          </button>
        </div>
      </form>
      {message}
      {/* {details.map((item) => {
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
            <br />
          </>
        );
      })} */}
    </div>
  );
};

const RegistrationModal = ({
  userTeam,
  viewTeam,
  setViewTeam,
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
  const [joinTypeOpen, setJoinTypeOpen] = useState(false);

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
      height: "80vh",
      width: `${!isMobile ? "50vw" : "90vw"}`,
    },
  };
  console.log("Pay type: ", payTypeOpen);
  const { isOpen, onOpen, onClose, setModalContent } = useAuth();
  return (
    <div>
      <Modal
        onClose={() => {
          if (paymentDone) {
            setViewTeam(true);
          }

          setPayTypeOpen(false);
          setJoinTypeOpen(false);
          onClose();
        }}
        isOpen={isOpen}
        scrollBehavior="inside"
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent h={"50vh"} p={0} m={0} w={"95%"}>
          <ModalCloseButton />
          <ModalBody p={0} m={0}>
            {viewTeam ? (
              <TeamModal userTeam={userTeam} />
            ) : isPaymentSuccess ? (
              <PaymentSuccessful
                eventData={eventData}
                setViewTeam={setViewTeam}
              />
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
                setJoinTypeOpen={setJoinTypeOpen}
              />
            ) : joinTypeOpen ? (
              <ShowJoinTeamDetails
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
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          // if(!isRegistered)
          if (paymentDone) {
            setViewTeam(true);
          }

          setPayTypeOpen(false);
          setJoinTypeOpen(false);
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
            setJoinTypeOpen(false);
            setIsOpen(false);
          }}
        >
          <PhoneIcon style={isMobile || true ? {} : { color: "white" }} />
        </div>

        
      </Modal> */}
    </div>
  );
};

export default RegistrationModal;
