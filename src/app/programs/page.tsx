"use client";

import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import HeaderSite from "../components/HeaderSite";
import FooterSite from "../components/FooterSite";
import Intro from "../components/Intro";
import Services from "../components/Services";
import MendatoryQuarters from "./components/mendatory"; 
import { Flex, HStack, Heading,Button,Box,Menu,
  MenuButton,
  MenuList,
  MenuItem, IconButton,AspectRatio,Card, CardHeader, CardBody, CardFooter,Image,Stack,Text,ButtonGroup,Divider,Grid
  } from "@chakra-ui/react";
// const inter = Inter({ subsets: ['latin'] })
import Head from '../head';
import AdmissionsCriterea from "./components/admission";
import StepsAdmission from "./components/stepsadmission";
import Contact from "../components/Contact";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  
});

export default function Home() {
  return (
    <ChakraBaseProvider theme={theme}>
       <Head title ="PIAIC | Programs" />
      <HeaderSite />
      <Services />
      <StepsAdmission/>
      <Contact/>
      <FooterSite />
     </ChakraBaseProvider>
  );
}
