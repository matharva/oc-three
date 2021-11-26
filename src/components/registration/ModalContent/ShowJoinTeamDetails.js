import { Form, Button } from "react-bootstrap";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";

import React, { useEffect, useState } from "react";
import { eventService } from "../../../services/eventService";

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

export default ShowJoinTeamDetails;
