import { Container, SimpleGrid, Stack } from "@chakra-ui/layout";
import React from "react";
import Footer from "../components/Footer";
import Product from "../components/merch/Product";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";

const MarketPlace = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Product />
          {/* <ProductTwo />
          <ProductTwo />
          <ProductTwo /> */}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default MarketPlace;
