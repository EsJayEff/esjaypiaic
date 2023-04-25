"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import Marquee from "react-fast-marquee";
import {
  VStack,
  Box,
  Heading,
  Image,
  StackDivider,
} from "@chakra-ui/react";
import Wrapper from "./wrapper"

export default function Cities() {
  return (
    <Wrapper>
    {/* Main Container */}
    <Box
      w="full"
      px={{ base: "50px", md: "100px", lg: "200px" }}
      // py={{ base: "20px", md: "20px", lg: "20px" }}
      // className="relative"
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        The Extra Mile | <br />
        Just Ahead
      </Heading>
      {/* Animation of the cities images */}
      <Marquee pauseOnHover speed={50}>
        <VStack
          className="w-full h-[150px] mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Karachi"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="karachicity.png"
            title="Karachi"
          />{" "}
          <figcaption className="text-sm">Karachi</figcaption>
        </VStack>
        <VStack
          className="w-full h-[150px] mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Lahore"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="lahorecity.png"
            title="Lahore"
          ></Image>
          <figcaption className="text-sm">Lahore</figcaption>
        </VStack>
        <VStack
          className="w-full h-[150px] mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Islamabad"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="islamabadcity.png"
            title="Islamabad"
          />
          <figcaption className="text-sm">Islamabad</figcaption>
        </VStack>
        <VStack
          className="w-full h-[150px] mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Faisalabad"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="faisalabadcity.png"
            title="Faisalabad"
          />
          <figcaption className="text-sm">Faisalabad</figcaption>
        </VStack>
        <VStack
          className="w-full h-[150px]  mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Peshawar"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="peshawarcity.png"
            title="Peshawar"
          />
          <figcaption className="text-sm">Peshawar</figcaption>
        </VStack>
        <VStack
          className="w-full h-[150px] mr-10 pb-10 overflow-hidden"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Image
            alt="Coming Soon"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="comingsoon.png"
            title="Coming Soon"
          />
          <figcaption className="text-sm">In Your City</figcaption>
        </VStack>
      </Marquee>
    </Box>
  </Wrapper>
  );
}
