"use client";

import React from "react";
import {
  AccordionIcon,
  VStack,
  Button,
  AspectRatio,
  StackDivider,
  Box,
  OrderedList,ListItem,
  Flex,
  Text,
  HStack,
  Heading,
  Avatar,
  Link,
  Container,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { RevealWrapper, RevealList } from "next-reveal";
import { mendatory, specialization, names} from "./cardsdata";
import { idText } from "typescript";
import { MinusIcon,AddIcon, } from '@chakra-ui/icons'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function AdmissionsCriterea() {
   return (
    <Box
    w="full" bgColor="blue.900"
    px={{ base: "25px", md: "100px", lg: "200px" }}
    py={{ base: "10px", md: "50px", lg: "60px" }}>

<Text color="whiteAlpha.500">
To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process
</Text>
<br/>
<hr/>
<div>
<OrderedList>
  <ListItem> Signup at PIAIC Portal.<a href="https://portal.piaic.org/signup">Click Here</a></ListItem>
  <ListItem>Submit the online application.</ListItem>
  <ListItem>Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</ListItem>
  <ListItem>Pass all PIAIC exams with an average score of at least 70%.</ListItem>
</OrderedList>
</div>


    </Box>
      )
}
