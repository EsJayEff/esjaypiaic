"use client";
// As Chakra components run of client side only

// imports of the libraries
import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  HStack,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
// imports of the global css as once class has been used for text to be horizontal manner for steps.
import "../../globals.css";
// importing the array to be used in the step cards.
import { stepsCard } from "./cardsdata";
import Wrapper from "../../components/wrapper"

export default function StepsAdmission() {
//Using the useState to change the states of the card. 
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newindex = isFirstSlide ? stepsCard.length - 1 : currentIndex - 1;
    setCurrentIndex(newindex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === stepsCard.length - 1;
    const newindex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newindex);
  };
  const goToSlide = (stepsCardIndex: any) => {
    setCurrentIndex(stepsCardIndex);
  };
//Main container
  return (
    <Wrapper>
    <Box
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      className="relative group"
      bg="yellow.50"
    >
{/* Heading of the section */}
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        How it Works
      </Heading>
      <Flex
        flexDirection="column"
        bg="yellow.50"
        height="full"
        justifyContent="center"
        alignItems="center"
      >
{/* Div containing the cards */}
        <Box bg="yellow.50" w="full">
{/* Grid been used for responsiveness and for the items to be aligned in the div */}
          <Grid
            templateColumns={{
              lg: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            pb="20px"
            gap="10"
            className="relative"
          >
{/* The first item of the grid step number */}
            <GridItem boxShadow="dark-lg" rounded="md">
              <HStack>
                <b>
                  <div className="test1 relative">
                    Step&nbsp;{stepsCard[currentIndex].Step}
                  </div>
                </b>
{/* For image of the step */}
                <AspectRatio width="full" height="400px" ratio={16 / 9}>
                  <Image
                    alt="service image"
                    width="full"
                    display="block"
                    min-height="25%"
                    min-width="25%"
                    overflow="hidden"
                    src={stepsCard[currentIndex].url}
                  />
                </AspectRatio>
              </HStack>
            </GridItem>
{/* The second part of the card in which step details are mentioned Step number is used again for smaller devices */}
            <GridItem>
              <br />
              <b>
                <div>Step&nbsp;{stepsCard[currentIndex].Step}</div>
              </b>
{/* The detail of the step */}
              <Text
                color="blue.700"
                fontSize={{ base: "80%", md: "90%", lg: "100%" }}
              >
                {stepsCard[currentIndex].Paragraph}
              </Text>
              <br />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={12}
        bgPosition="center"
        bgRepeat="no-repeat"
        mb={2}
      >
{/* The buttons are used for moving back and forth in the steps */}
        <ButtonGroup gap="4">
          <Button colorScheme="facebook" onClick={prevSlide}>
            Previous Step
          </Button>
          <Button colorScheme="facebook" onClick={nextSlide}>
            Next Step
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
</Wrapper>
  );
}
