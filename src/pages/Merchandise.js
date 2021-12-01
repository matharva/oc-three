import React from "react";
import Product from "../components/merch/Product";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";

import { Container, Stack, SimpleGrid } from "@chakra-ui/react";

const Merchandise = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Merchandise;
