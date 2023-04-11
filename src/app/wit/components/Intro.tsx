"use client";
// As Chakra components run of client side only

// Imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { RevealWrapper } from "next-reveal";
import { TypeAnimation } from "react-type-animation";
import Wrapper from "../../components/wrapper"

export default function Intro({ videoLink }: { videoLink: string }) {
  return (
    <Wrapper>
{/* Main component */}
    <Box
      width="full"
      bg="blue.900"
      px={{ base: "50px", md: "100px", lg: "200px" }}
      py={{ base: "40px", md: "50px", lg: "60px" }}
      z-index="1"
      // mb="150px"
    >
{/* Grid for the Texts on left and right and for responsiveness */}
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="60px"
        gap="8"
      >
        {/* Left Item of the Grid */}
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
              Women have the power to change
              <br />
              {/* Animations */}
              <TypeAnimation
                sequence={["the world", 2000, "the generations", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </Heading>
          </RevealWrapper>
        </GridItem>
        {/* Right Item of the Grid */}
        <GridItem w="100%" h="100%">
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
            >
              The Women Empowerment Division of&nbsp;
              <span className="text-white">
                <b>
                  Presidential Initiative for Artificial Intelligence &
                  Computing (PIAIC)
                </b>
              </span>
              &nbsp; is committed to the empowerment and autonomy of women in
              Pakistan.
            </Text>
          </RevealWrapper>
          {/* Animations */}
          <RevealWrapper
            origin="top"
            delay={400}
            duration={5000}
            distance="500px"
            reset={true}
          >
            {/* Right side of the Grid */}
            <Text
              color="whiteAlpha.700"
              pb="20px"
              fontSize={{ base: "70%", md: "80%", lg: "100%" }}
            >
              The single most important channel for the empowerment of women is
              education. The Women Empowerment Division is committed to
              providing the best technical education in the world with the
              flexibility to allow just about anyone to participate and improve
              their lives. The primary objective of the Women Empowerment
              Division is to provide a platform via which women can receive
              education and training to jumpstart their careers in the global
              technology industry.
            </Text>
          </RevealWrapper>
          {/* Animations */}
          <RevealWrapper
            origin="top"
            delay={600}
            duration={7000}
            distance="500px"
            reset={true}
          >
          {/* The Link to the page mission part */}
            <a className="hover:text-white text-gray-300" href="#mission">
              Explore More
            </a>
            <ArrowForwardIcon style={{ filter: "invert(1)" }} />
          </RevealWrapper>
        </GridItem>
      </Grid>
      {/* Animations */}
      <RevealWrapper
        origin="top"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        {/* Div for the video */}
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
              controls
            ></video>
          </AspectRatio>
        </Box>
      </RevealWrapper>
    </Box>
  </Wrapper>
  );
}
