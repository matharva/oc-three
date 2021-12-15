// import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Oculus from "../../../assets/Oculus.png";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { eventService } from "../../../services/eventService";
import { OC_BG_DARK } from "../../../services/helpers";

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
  const [teamName, setTeamName] = useState(null);
  const [error, setError] = useState("");
  const [teamError, setTeamError] = useState("");

  useEffect(() => {}, []);

  async function showRazorpayModal() {
    if (teamName.length <= 3) {
      return;
    }
    console.log("sgsgsgs");
    if (error.length) {
      return;
    }
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
          let paymentBody;
          if (refCode) {
            paymentBody = {
              paymentId: response.razorpay_payment_id,
              eventName: eventName,
              userId: currentUser.uid,
              teamName: teamName,
              inviteCode: refCode,
            };
          } else {
            paymentBody = {
              paymentId: response.razorpay_payment_id,
              eventName: eventName,
              userId: currentUser.uid,
              teamName: teamName,
            };
          }
          let paymentData = await eventService.postPayment(paymentBody);
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
    console.log("hehehehe: ", value);
    let isValid = true;
    if (value) {
      var pattern = new RegExp(/^[0-9\b]+$/);

      if (!pattern.test(value)) {
        isValid = false;

        setError("Please enter only number.");
        // errors["phone"] = ;
      } else if (value.length != 10) {
        isValid = false;
        setError("Please enter valid phone number.");

        // errors["phone"] = ;
      }
    }
    if (isValid) {
      setError("");
    }
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

  const teamNameHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value.length <= 3) {
      setTeamError("Team name must be greater than 3");
    } else {
      setTeamError("");
    }

    setTeamName(value);
  };

  return (
    <div className="payment-success-modal" style={{ padding: "0rem 2rem" }}>
      <Heading
        // style={{ paddingBottom: "2rem", fontWeight: "bold", color: "white" }}
        color={"white"}
        margin={"2rem 0"}
        className="form-header"
        size="2xl"
      >
        Register Team
      </Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <>
          {/* <Form.Group className="mb-3" controlId="">
            <Form.Label style={{ fontWeight: "bold" }}>
              Payment Type
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
              {details.map((item) => {
                return (
                  <>
                    <option
                      value={`${item.Type}`}
                    >{`${item.Type}: ${item.Fee}`}</option>
                
                  </>
                );
              })}
            </Form.Select>
          </Form.Group> */}
          <FormControl isRequired marginBottom={"1.5rem"}>
            <FormLabel color={"white"}>Payment Type: </FormLabel>
            <Select
              id="paymentType"
              value={paymentType}
              onChange={paymentHandler}
              color={"white"}
              bg={OC_BG_DARK}
            >
              {/* <option>Select Team Options</option> */}
              {details.map((item) => {
                return (
                  <>
                    <option
                      value={`${item.Type}`}
                      // color={"black"}
                      style={{ color: "black" }}
                    >{`${item.Type}: ${item.Fee}`}</option>
                  </>
                );
              })}
              {/* <option>United Arab Emirates</option>
              <option>Nigeria</option> */}
            </Select>
          </FormControl>

          <FormControl id="email" marginBottom={"1.5rem"} isRequired>
            <FormLabel color={"white"}>Team name: </FormLabel>
            <Input
              type="text"
              value={teamName}
              onChange={teamNameHandler}
              color={"white"}
            />
            <FormHelperText>{teamError.length ? teamError : ""}</FormHelperText>
          </FormControl>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>Team Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Team Name"
              value={teamName}
              onChange={teamNameHandler}
            />
          </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Phone Number{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={phoneHandler}
            />
          </Form.Group> */}

          <FormControl id="contactNumber" marginBottom={"1.5rem"} isRequired>
            <FormLabel color={"white"}>Phone Number: </FormLabel>
            <Input
              type="number"
              value={phoneNumber}
              onChange={phoneHandler}
              color={"white"}
            />
            {/* <PhoneNumberInput
              value={phoneNumber}
              options={countryOptions}
              placeholder="Enter phone number"
              onChange={phoneHandler}
            /> */}
            <FormHelperText>
              {/* {}
               */}
              {error.length
                ? error
                : "We need it to add you to the respective event groups"}
            </FormHelperText>
          </FormControl>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Referal Code{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Referal Code"
              value={refCode}
              onChange={refCodeHandler}
            />
          </Form.Group> */}

          <FormControl id="referralCode" marginBottom={"1.5rem"}>
            <FormLabel color={"white"}>Referral Code: </FormLabel>
            <Input
              type="text"
              value={refCode}
              onChange={refCodeHandler}
              color={"white"}
            />
            <FormHelperText>To get referral points</FormHelperText>
          </FormControl>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </>
        <div className="form-btn-div">
          {/* <button
            className="reg-btn"
            onClick={() => {
              // showRazorpayModal();
              console.log(
                "The register form is: ",
                phoneNumber,
                paymentType,
                refCode,
                teamName,
                eventName
              );
            }}
          >
            Proceed
          </button> */}
          <Button
            colorScheme={"teal"}
            variant={"solid"}
            onClick={() => {
              showRazorpayModal();
              console.log(
                "The register form is: ",
                phoneNumber,
                paymentType,
                refCode,
                teamName,
                eventName
              );
            }}
            // padding="0.5rem 1rem"
            // padding={"1rem"}
            size="lg"
            marginBottom={"1.5rem"}
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShowPaymentDetails;
