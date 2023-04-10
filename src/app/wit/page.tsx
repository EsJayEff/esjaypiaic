"use client";

import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import HeaderSite from "../components/HeaderSite";
import FooterSite from "../components/FooterSite";
import { Flex, HStack, Heading,Button,Box,Menu,
  MenuButton,
  MenuList,
  MenuItem, IconButton,AspectRatio,Card, CardHeader, CardBody, CardFooter,Image,Stack,Text,ButtonGroup,Divider,Grid
  } from "@chakra-ui/react";
// const inter = Inter({ subsets: ['latin'] })
import Head from '../head';
import Intro from './components/Intro';
import ImageSlider from './components/imageslider';
import Mission from './components/mission';
import Cities from '../components/Cities'
import Contact from '../components/Contact'

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

export default function Home() {
  return (
    <ChakraBaseProvider theme={theme}>
       <Head title ="PIAIC | WIT" />
      <HeaderSite />
      <Intro 
      videoLink="https://www.atechconsultancy.com/piaic/WIT.mp4"/>
      <Cities/>
      <Mission />
      <ImageSlider/>
      <Contact/>
      <FooterSite />

     </ChakraBaseProvider>
  );
}
