"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Flex,
  Text,
} from "@chakra-ui/react";
import Wrapper from "./wrapper"

export default function Commitment({ text }: { text: string }) {
  return (
    <Wrapper>
    <Flex>
      <Text>{text}</Text>
    </Flex>
    </Wrapper>
  );
}
