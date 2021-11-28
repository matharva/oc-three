import { Form, Button } from "react-bootstrap";
import Oculus from "../../../assets/Oculus.png";
import axios from "axios";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";

import React, { useEffect, useState } from "react";
import { eventService } from "../../../services/eventService";

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

const SinglePlayer = ({
  setPaymentDone,
  setIsPaymentSuccess,
  eventData,
  currentUser,
  handleClose,
  onOpen,
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
      event: eventData.Title,
      amount: parseInt(amount),
    };

    console.log("The result is:", result, data, eventData);
    const resData = await axios.post(
      "https://us-central1-oculus2022-75997.cloudfunctions.net/payment",
      data
    );

    handleClose();
    console.log("The resData is: ", resData);

    let updatedUser = await eventService.setUserPhoneNumber(
      phoneNumber,
      currentUser
    );
    if (updatedUser.phoneNumber) {
      const options = {
        key: resData?.data?.key, // Enter the Key ID generated from the Dashboard
        amount: resData?.data?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: eventData.Title,
        description: `${eventData.Title} Transaction`,
        image: Oculus,
        order_id: resData?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          let paymentData = await eventService.postPayment({
            paymentId: response.razorpay_payment_id,
            eventName: eventData.Title,
            userId: currentUser.uid,
            teamName: "Single Player",
            inviteCode: refCode,
          });
          if (paymentData) {
            setPaymentDone(true);
            setIsPaymentSuccess(true);
          }
          onOpen();
        },
        prefill: {
          name: currentUser.name,
          contact: currentUser.phoneNumber,
          email: currentUser.email,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log("The options are: ", options);
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
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
              console.log("The data is: ", phoneNumber, refCode, eventData);
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

export default SinglePlayer;
