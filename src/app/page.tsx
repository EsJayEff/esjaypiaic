"use client";

import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import HeaderSite from "./components/HeaderSite";
import FooterSite from "./components/FooterSite";
import Intro from "./components/Intro";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import Commitments from "./components/Commitments";
import TheWinningTeam from "./components/TheWinningTeam";
import ImageSlider from "./components/VideoSlider";
import Blogs from "./components/Blogs";
import Cities from "./components/Cities";
import WeWorkWith from "./components/WeWorkWith";
import Contact from "./components/Contact";
import Head from "./head"

// const inter = Inter({ subsets: ['latin'] })

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

export default function Home() {
  return (
 
 
    <ChakraBaseProvider theme={theme}>
     <Head title ="PIAIC | Home" />
      <HeaderSite />
      <Intro videoLink="https://www.atechconsultancy.com/piaic/finalintro2.mp4"/>
      <HowWeWork />
      <Commitments />
      <Services />
      <Cities />
      <TheWinningTeam />
      <Blogs />
      <ImageSlider />
      <Contact/>
      <WeWorkWith />
      <FooterSite />
    </ChakraBaseProvider>

  );
}
