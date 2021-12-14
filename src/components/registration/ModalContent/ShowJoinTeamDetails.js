// import { Form, Button } from "react-bootstrap";
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

const ShowJoinTeamDetails = ({
  eventData,
  currentUser,
  setJoin,
  // onOpen,
  handleClose,
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
  const [error, setError] = useState("");

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
        // inviteCode: refCode,
      });
      if (!joinData.Message.includes("unsuccessfully")) {
        setJoin(true);
        // setIsOpen(false);
        // onOpen();
        handleClose();
      } else {
        setMessage(joinData.Message);
      }
    }
  };

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

    setPhoneNumber(value);
  };

  const refCodeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRefCode(value);
  };

  return (
    <div className="payment-success-modal" style={{ padding: "0rem 2rem" }}>
      <Heading
        // style={{ paddingBottom: "2rem", fontWeight: "bold", color: "white" }}
        size="2xl"
        color={"white"}
        margin={"2rem 0"}
        className="form-header"
      >
        Join a team
      </Heading>
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
        <>
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

          <FormControl id="teamCode" isRequired marginBottom={"1.5rem"}>
            <FormLabel color={"white"}>Team Code: </FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              value={code}
              color={"white"}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Phone Number{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={phoneHandler}
            />
          </Form.Group> */}

          <FormControl id="contactNumber" isRequired marginBottom={"1.5rem"}>
            <FormLabel color={"white"}>Phone Number: </FormLabel>
            <Input
              type="number"
              value={phoneNumber}
              onChange={phoneHandler}
              color={"white"}
            />
            <FormHelperText>
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
              type="email"
              placeholder="Enter Referal Code"
              value={refCode}
              onChange={refCodeHandler}
            />
          </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </>
        {/* <br /> */}
        <div className="form-btn-div">
          <Button
            colorScheme={"teal"}
            variant={"solid"}
            padding="0.5rem 1rem"
            onClick={() => {
              // joinUser();
              console.log("The register form is: ", phoneNumber, code, refCode);
            }}
          >
            Confirm
          </Button>
          {/* <button
            className="reg-btn"
            onClick={() => {
              joinUser();
              console.log("The register form is: ", phoneNumber, code, refCode);
            }}
          >
            Confirm
          </button> */}
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
