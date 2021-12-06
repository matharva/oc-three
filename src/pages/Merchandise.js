import React, { useState } from "react";
import Product from "../components/merch/Product";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";

import { Container, Stack, SimpleGrid } from "@chakra-ui/react";
import { useAuth } from "../contexts/AppContext";
import Payment from "../assets/done.jpg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Merchandise = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      brand: "Brand",
      item: "Nice Chair, Pink",
      price: "57",
    },
    {
      id: 2,
      brand: "Brand",
      item: "Nice Chair, Pink",
      price: "57",
    },
    {
      id: 3,
      brand: "Brand",
      item: "Nice Chair, Pink",
      price: "57",
    },
    {
      id: 4,
      brand: "Brand",
      item: "Nice Chair, Pink",
      price: "57",
    },
    {
      id: 5,
      brand: "Brand",
      item: "Nice Chair, Pink",
      price: "57",
    },
  ]);

  const [merchSuccess, setMerchSuccess] = useState(false);

  const { jello, currentUser } = useAuth();
  const { isOpen, onOpen, onClose, setModalContent, onLoginModalOpen } =
    useAuth();

  return (
    <>
      <div>
        <MobileNav />
        <DesktopNav />
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            {product.map((item) => {
              return (
                <Product
                  item={item}
                  currentUser={currentUser}
                  onOpen={onOpen}
                  onLoginModalOpen={onLoginModalOpen}
                  setMerchSuccess={setMerchSuccess}
                />
              );
            })}
          </SimpleGrid>
        </Container>
        <Footer />
      </div>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent h="500px" w={"95%"}>
          <ModalCloseButton />
          <ModalBody p={0} m={0}>
            {merchSuccess ? PaymentSuccessful() : PaymentUnSuccessful()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const PaymentSuccessful = () => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <h1>Successful Payment</h1>
      </div>
      <p>Your payment for the item was successfully completed</p>
    </div>
  );
};

const PaymentUnSuccessful = () => {
  return (
    <div className="payment-grid">
      <div className="payment-title">
        <div className="payment-img-container">
          <img src={Payment} alt="" />
        </div>
        <h1> Payment Unsuccessful</h1>
      </div>
      <p>
        Your payment for the item was not done due to some errors in Razorpay
      </p>
    </div>
  );
};

export default Merchandise;
