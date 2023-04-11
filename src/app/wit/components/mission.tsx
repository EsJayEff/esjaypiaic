"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
// Importing all the child components already been created
import Commitment from "../../components/Commitment";
import Wrapper from "../../components/wrapper"

export default function Mission() {
  return (
    <Wrapper>
    <section id="mission" className="pt-20">
      {/* Main container */}
      <Flex
        w="full"
        height="full"
        pl={{ base: "25px", md: "100px", lg: "200px" }}
        background="yellow.50"
        justifyContent="space-between"
        alignItems="flex-start"
        className="relative"
      >
        <Box pr={{ base: "25px", md: "100px", lg: "140px" }}>
          {/* The Heading of the section */}
          <Heading
            fontSize={{ base: "34px", md: "44px", lg: "54px" }}
            letterSpacing="6px"
            color="blue.900"
            py="20px"
          >
            Mission of WIT
          </Heading>
          {/* Grid for image and details of the section */}
          <Grid
          templateColumns={{
            lg: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          color="blue.900"
          gap="8"
        >
            <GridItem>
              {/* Sending data to the commitment card component  */}
              <Commitment text="The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main mission of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world." />
              <br />
            </GridItem>
            {/* Image item of the grid */}
            <GridItem>
              <AspectRatio
                width="500px"
                ratio={1}
                display={{ base: "initial", md: "initial", lg: "none" }}
              >
                <Image
                  alt="Empowerment"
                  className="object-cover"
                  display="block"
                  max-height="100%"
                  max-width="100%"
                  overflow="hidden"
                  src="empowerment.jpg"
                  boxShadow="dark-lg"
                  rounded="md"
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Box>
        <Image
          alt="Empowerment"
          width="full"
          src="empowerment.jpg"
          display={{ base: "none", md: "none", lg: "initial" }}
          className="boxShadow='dark-lg' rounded='md'"
        />
      </Flex>
    </section>
    </Wrapper>
  );
}
