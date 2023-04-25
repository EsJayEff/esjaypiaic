"use client";
// As Chakra components run of client side only

// imports of the libraries
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
// Importing the head component of next JS to change the title of the page.
import Head from "./head";
// Importing all the child components already been created
import HeaderSite from "./components/HeaderSite";
import Intro from "./components/Intro";
import HowWeWork from "./components/HowWeWork";
import Commitments from "./components/Commitments";
import Services from "./components/Services";
import Cities from "./components/Cities";
import TheWinningTeam from "./components/TheWinningTeam";
import Blogs from "./components/Blogs";
import VideoSlider from "./components/VideoSlider";
import Contact from "./components/Contact";
import WeWorkWith from "./components/WeWorkWith";
import FooterSite from "./components/FooterSite";
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
      <Head title="PIAIC | Home" />
      {/* child components */}
      <HeaderSite />
      {/* Sending the videolink as a prop to the Intro component as its been used in two different areas the website. */}
      <Intro videoLink="https://www.atechconsultancy.com/piaic/finalintro2.mp4" />
      <HowWeWork />
      <Commitments />
      <Services />
      <Cities />
      <TheWinningTeam />
      <Blogs />
      <VideoSlider />
      <Contact />
      <WeWorkWith />
      <FooterSite />
    </ChakraBaseProvider>
  );
}
