import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Oculus from "../../../assets/Oculus.png";
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

const ShowPaymentDetails = ({
  details,
  eventName,
  setPaymentDone,
  setIsPaymentSuccess,
  currentUser,
  handleClose,
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
    console.log("The result is:", amount, eventName);
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Dard");
      return;
    }
    const data = {
      event: eventName,
      amount: parseInt(amount),
    };

    console.log("The result is:", result, data, eventName);

    let updatedUser = await eventService.setUserPhoneNumber(
      phoneNumber,
      currentUser
    );
    if (updatedUser.phoneNumber) {
      console.log("The data is: ", updatedUser);
      const resData = await axios.post(
        "https://us-central1-oculus2022-75997.cloudfunctions.net/payment",
        data
      );
      handleClose();
      console.log("The resData is: ", resData);
      //
      const options = {
        key: resData?.data?.key, // Enter the Key ID generated from the Dashboard
        amount: resData?.data?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: eventName,
        description: `${eventName} Transaction`,
        image: Oculus,
        order_id: resData?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          let paymentData = await eventService.postPayment({
            paymentId: response.razorpay_payment_id,
            eventName: eventName,
            userId: currentUser.uid,
            teamName: "Dardadad",
            inviteCode: refCode,
          });
          console.log("The payment data is: ", paymentData);
          if (paymentData.registrationDetails) {
            setPaymentDone(true);
            setIsPaymentSuccess(true);
          }
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
                refCode,
                eventName
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

export default ShowPaymentDetails;
