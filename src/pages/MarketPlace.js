import { Container, SimpleGrid, Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Product from "../components/merch/Product";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";
import { useAuth } from "../contexts/AppContext";

const MarketPlace = () => {
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
  const { currentUser, onOpen, onLoginModalOpen } = useAuth();
  const [merchSuccess, setMerchSuccess] = useState(false);

  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          minHeight={window.innerWidth > 720 ? "100vh" : "70vh"}
          position={"relative"}
        >
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              fontSize: window.innerWidth > 720 ? "3rem" : "1.5rem",
              fontWeight: "bold",
              transform: "translate(-60%,-50%)",
              borderBottom: "2px solid white",
            }}
          >
            Market Place
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontSize: window.innerWidth > 720 ? "7rem" : "3rem",
              fontWeight: "bold",
              transform: "translate(-50%,-50%)",
            }}
          >
            COMING SOON
          </div>
          {/* {product.map((item) => {
            return (
              <Product
                item={item}
                currentUser={currentUser}
                onOpen={onOpen}
                onLoginModalOpen={onLoginModalOpen}
                setMerchSuccess={setMerchSuccess}
              />
            );
          })} */}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default MarketPlace;
