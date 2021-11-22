import React from "react";

import "../styles/Profile.scss";

import MobileNav from "../components/navigation/MobileNav";
import DesktopNav from "../components/navigation/DesktopNav";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Profile = () => {
  function handleSubmit() {}

  return (
    <>
      <MobileNav />
      <DesktopNav />

      <Container style={{ paddingTop: "5rem" }}>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    disabled
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    disabled
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Reference Code</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
