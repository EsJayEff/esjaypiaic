"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { RevealWrapper } from "next-reveal";
import { TypeAnimation } from "react-type-animation";
import Wrapper from "./wrapper"

export default function Intro({videoLink}:{videoLink:string}) {
  return (
    <Wrapper>
    <Box
      width="full"
      bg="blue.900"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
      z-index="1"
      mb={{ base: "60px", md: "80px", lg: "100px" }}
    >
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="60px"
        gap="8"
      >
        <GridItem w="100%" h="100%">
          <RevealWrapper
            origin="top"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Heading
              fontSize={{ base: "34px", md: "44px", lg: "54px" }}
              letterSpacing="6px"
              color="whiteAlpha.900"
            >
              People who care <br />
              about your <br />
              <TypeAnimation
                sequence={[
                  "growth",
                  2000,
                  "career",
                  2000,
                  "future",
                  2000,
                  "development",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </Heading>
          </RevealWrapper>
        </GridItem>
        <GridItem w="100%" h="100%">
          {/* <Box maxW="300px"> */}
          <RevealWrapper
            origin="top"
            delay={200}
            duration={2000}
            distance="500px"
            reset={true}
          >
            <Text
              color="whiteAlpha.700"
              pb="20px"
              fontSize={{ base: "70%", md: "80%", lg: "100%" }}
            >The mission of&nbsp;
              <span className="text-white">
                <b>
                  Presidential Initiative for Artificial Intelligence &
                  Computing (PIAIC)
                </b>
              </span>&nbsp;
              is to reshape Pakistan by revolutionizing education, research, and
              business by adopting latest, cutting-edge technologies. Experts
              are calling this the 4th industrial revolution. We want Pakistan
              to become a global hub for AI, data science, cloud native
              computing, edge computing, blockchain, augmented reality, and
              internet of things.
              <Link
                href="/about"
                className="hover:text-white text-gray-300 pl-[10px] py-[10px]"
              >
                &nbsp;
                <br />
                <br />
                Explore More
                <ArrowForwardIcon />
              </Link>
            </Text>
          </RevealWrapper>
        </GridItem>
      </Grid>
      <RevealWrapper
        origin="top"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <Box className="block">
          <AspectRatio
            width="full"
            ratio={16 / 9}
            mb={{ base: "-100px", md: "-150px", lg: "-200px" }}
            position="relative"
          >
            <video
              src={videoLink}
              className="video"
              autoPlay
              muted
              loop
            ></video>
          </AspectRatio>
        </Box>
      </RevealWrapper>
    </Box>
    </Wrapper>
  );
}
