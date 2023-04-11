"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import Wrapper from "./wrapper"

export default function WorkMethodCard({
  imagePath,
  heading,
  description,
}: {
  imagePath: string;
  heading: string;
  description: string;
}) {
  return (
    <Wrapper>
    <Box w="full">
      <AspectRatio ratio={16 / 9}>
        <video
          src={imagePath}
          width="640"
          height="480"
          autoPlay
          muted
          loop
        ></video>
      </AspectRatio>
      <Heading fontSize="24px" color="blue.900" pb="20px" p="10px">
        {heading}
      </Heading>
      <Text fontSize="14px" color="blue.700" p="10px">
        {description}
      </Text>
    </Box>
    </Wrapper>
  );
}
