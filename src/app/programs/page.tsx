"use client";
// As Chakra components run of client side only

// imports of the libraries
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
// impoting the head component of next JS to change the title of the page.
import Head from "../head";
// Importing all the child components already been created
import HeaderSite from "../components/HeaderSite";
import Services from "../components/Services";
// Importing the component that is created for this section
import StepsAdmission from "./components/stepsadmission";
// Importing all the child components already been created
import Contact from "../components/Contact";
import FooterSite from "../components/FooterSite";
// Extending the Chakra Theme for Fonts to be used in the for heading and for body text throughout the website.
const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

export default function Home() {
  return (
    // Chakra wrapper as Chakra components are used in the children
    <ChakraBaseProvider theme={theme}>
      {/* The title of the page  */}
      <Head title="PIAIC | Programs" />
      {/* child components */}
      <HeaderSite />
      <Services />
      <StepsAdmission />
      <Contact />
      <FooterSite />
    </ChakraBaseProvider>
  );
}
