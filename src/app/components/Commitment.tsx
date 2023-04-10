"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Commitment({ text }: { text: string }) {
  return (
    <Flex>
      <Text>{text}</Text>
    </Flex>
  );
}
