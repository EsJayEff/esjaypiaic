"use client";
// As Chakra components run of client side only

// imports of the libraries
import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function VideoSlider() {
  const slides = [
    {
      url: "https://www.youtube.com/embed/43nPL8SgN4c",
      desc: "Successful story of 22 years old PIAIC student Daniyal Nagori. Who earns 10,000 USD per month.",
    },
    {
      url: "https://www.youtube.com/embed/kMRVJAsMjBg",
      desc: "PIAIC student Faiza Earns A Million Dollars Working Form Home.",
    },
    {
      url: "https://www.youtube.com/embed/TS6WdZebsNU",
      desc: "19 Years old PIAIC student Shahzain is earning Million Dollars working from Home.",
    },
    {
      url: "https://www.youtube.com/embed/D0eJYGurKOk",
      desc: "Story of Three Pakistani PIAIC Students from freelancing towards product development.",
    },
    {
      url: "https://www.youtube.com/embed/e6wEGsAT2no",
      desc: "PIAIC student and a House Wife becomes a freelancer.",
    },
    {
      url: "https://www.youtube.com/embed/w6q6Id44O3k",
      desc: "18 Years old PIAIC student Aisha starts a software company.",
    },
    {
      url: "https://www.youtube.com/embed/ajgOkLMMN3w",
      desc: "And our mission will continue to train all the Pakistanis with no age limits.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newindex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newindex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newindex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newindex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Box
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      className="relative group"
      bg="yellow.50"
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        The people have spoken
      </Heading>
      <Flex flexDirection="column" bg="yellow.50" height="full">
        <Box bg="yellow.50" w="full">
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
            <GridItem boxShadow="dark-lg" rounded="md">
              <AspectRatio w="full" ratio={16 / 9}>
                <iframe width="560" height="315" src={slides[currentIndex].url}>
                  {" "}
                </iframe>
              </AspectRatio>
            </GridItem>
            <GridItem>
              <Text
                color="blue.700"
                fontSize={{ base: "80%", md: "90%", lg: "100%" }}
              >
                {slides[currentIndex].desc}
              </Text>
              <br />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </Box>
  );
}
