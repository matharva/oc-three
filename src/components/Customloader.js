import React, { useState, useRef, useEffect, Suspense } from "react";
import { CircularProgress, Spinner } from "@chakra-ui/react";

const CustomLoader = () => {
  return (
    <div className="loader">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default CustomLoader;
