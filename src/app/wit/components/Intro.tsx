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
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Intro({videoLink}:{videoLink:string}) {
  return (
    <Box
      width="full"
      bg="blue.900"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
      z-index="1"
      mb="150px"
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
              Women have the power to change<br />
              
              <TypeAnimation
                sequence={[
                  "the world",
                  2000,
                  "the generations",
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
            >The Women Empowerment Division of&nbsp;
              <span className="text-white">
                <b>
                  Presidential Initiative for Artificial Intelligence &
                  Computing (PIAIC)
                </b>
              </span>&nbsp;
              is committed to the empowerment and autonomy of women in Pakistan.
              </Text>
              </RevealWrapper>

              <RevealWrapper
            origin="top"
            delay={400}
            duration={5000}
            distance="500px"
            reset={true}
          >
              <Text
              color="whiteAlpha.700"
              pb="20px"
              fontSize={{ base: "70%", md: "80%", lg: "100%" }}>
              The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry. 
            </Text>
            </RevealWrapper>
              
            <RevealWrapper
            origin="top"
            delay={600}
            duration={7000}
            distance="500px"
            reset={true}
          >  
              <a className="hover:text-white text-gray-300" href="#mission">Explore More</a> 
                <ArrowForwardIcon style={{filter: "invert(1)"}} />
        </RevealWrapper>       
        </GridItem>
      </Grid>
      {/* </RevealWrapper> */}
      {/* <Link color="whiteAlpha.800" py="10px" display={{base:'none', md:'initial',lg:'initial'}} > 
      Explore More &nbsp; <ArrowForwardIcon />
      </Link> */}

      {/* </Box> */}
      {/* </Flex> */}
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
              controls
            ></video>
            {/* <iframe src="https://www.atechconsultancy.com/piaic/finalintro.mp4"> </iframe> */}
          </AspectRatio>
          {/* <div className="gradient"></div> */}
        </Box>
      </RevealWrapper>
    </Box>
  );
}
