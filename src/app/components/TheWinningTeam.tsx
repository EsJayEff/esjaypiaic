"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Box,
  Heading,
  Grid,
} from "@chakra-ui/react";

import ProfileCard from "./ProfileCard";
import Wrapper from "./wrapper"

export default function TheWinningTeam2() {
  return (
    <Wrapper>
    <Box
      w="full"
      px={{ base: "50px", md: "100px", lg: "200px" }}
      py={{ base: "40px", md: "50px", lg: "60px" }}
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        Our People Are Your Advantage
      </Heading>
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="20px"
        gap="10"
      >
        <ProfileCard />
      </Grid>
    </Box>
  </Wrapper>
  );
}
